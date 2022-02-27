import Vue from 'vue';

export const state = () => ({
    ourTeams: {
        0: { name: 'Tym A' },
        1: { name: 'Tym B' },
        2: { name: 'Tym dorost' },
    },
    leagueTeams: [
        { name: 'TJ Sokol Lipa', logo: 'lipa.png', roster: {}, id: 0 },
        { name: 'FCSS', logo: 'fcss.jpg', roster: {}, id: 1 },
    ],
    pageActiveTabs: {
        gallery: 0,
        seasons: 0,
        teams: 0,
    },
    history: [],
    selectedGame: null,
    currentRoute: null,
});

export const getters = {
    selectedTabTeam(state) {
        const routeName = state.currentRoute?.name;
        const selectedTab = state.pageActiveTabs[routeName];
        return state.ourTeams[selectedTab]?.name || 'Tym A';
    },
    // currentSeasonSelectedTeam(state, getters) {
    //     const dt = new Date();
    //     const currentYear = dt.getFullYear();
    //     const currentYearHistory = state.history.find((y) => y.year === currentYear.toString());
    //     const currentSeasons = currentYearHistory?.schedules;

    //     return currentSeasons.find((s) => s.team === getters.selectedTabTeam);
    // },
    upcomingGamesTeamA(state, getters) {
        const dt = new Date();
        const currentYear = dt.getFullYear();
        const getYearUpcomingGames = (year) => {
            const history = state.history.find((y) => y.year === year.toString());
            const schedule = history?.schedules?.find((h) => h.team === 'Tym A');
            const games = schedule?.games;
            return games?.filter((g) => new Date(g.date).getTime() > dt.getTime());
        };
        let upcomingGames;

        upcomingGames = getYearUpcomingGames(currentYear);
        if (!upcomingGames) upcomingGames = getYearUpcomingGames(currentYear + 1);

        if (upcomingGames) {
            upcomingGames = upcomingGames.filter((g) => g._uid !== getters.nextGame._uid);
        }

        return upcomingGames;
    },
    selectedTabTeamHistory(state, getters) {
        const team = getters.selectedTabTeam;
        const teamHistory = [];

        state.history.forEach((h, i) => {
            let copy = JSON.parse(JSON.stringify(h));
            if (copy.schedules) {
                copy.schedules = [copy.schedules.find((z) => z.team === team)];
            }
            teamHistory.push(copy);
        });

        return teamHistory;
    },
    nextGame(state) {
        const dt = new Date();
        const currentYear = dt.getFullYear();
        let scheduleYear;
        let aTeamGames;
        let nextGame;

        const getGames = (obj) => obj.schedules.find((s) => s.team === 'Tym A').games;
        const getGame = (arr) => arr.find((game) => new Date(game.date).getTime() > dt.getTime());

        const getNextGame = (year) => {
            scheduleYear = state.history.find((y) => y.year === year.toString());

            if (scheduleYear?.schedules) aTeamGames = getGames(scheduleYear);
            else return null;

            if (aTeamGames) return getGame(aTeamGames);
            else return null;
        };

        nextGame = getNextGame(currentYear);
        if (!nextGame) nextGame = getNextGame(currentYear + 1);

        if (nextGame) {
            nextGame.homeTeam =
                state.leagueTeams[state.leagueTeams.findIndex((x) => x.id === parseInt(nextGame.homeTeamId))];
            nextGame.awayTeam =
                state.leagueTeams[state.leagueTeams.findIndex((x) => x.id === parseInt(nextGame.awayTeamId))];
            if (nextGame.date) {
                const ndt = new Date(nextGame.date);
                nextGame.gameTime = ndt.getHours() + ':' + ndt.getMinutes();
                nextGame.gameDay = ndt.toLocaleDateString();
            }
        }

        return nextGame;
    },
};

export const mutations = {
    setActiveTab(state, obj) {
        state.pageActiveTabs[obj.page] = obj.tab;
    },
    setSelectedGame(state, game) {
        state.selectedGame = game;
    },
    addSchedule(state, content) {
        const games = content.games.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        Vue.set(state.history, content.year, games);
    },
    setHistory(state, h) {
        state.history = h;
    },
    currentRoute(state, route) {
        state.currentRoute = route;
    },
};

export const actions = {
    async nuxtServerInit({ dispatch }, { app }) {
        try {
            const result = await app.$storyapi.get('cdn/stories/history', { version: 'draft' });
            if (result?.data?.story?.content?.years) {
                dispatch('sortHistory', result.data.story.content.years);
            }
        } catch (err) {
            console.warn(err);
        }
    },
    sortHistory({ commit }, h) {
        const sortedHistory = [];

        h.forEach((year, indexI) => {
            sortedHistory.push(year);
            if (year.hasOwnProperty('schedules')) {
                year.schedules.forEach((schedule, indexJ) => {
                    sortedHistory[indexI].schedules[indexJ].games = schedule.games.sort(
                        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                    );
                });
            }
        });

        commit('setHistory', sortedHistory);
    },
};
