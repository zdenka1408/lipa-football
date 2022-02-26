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
        history: 0,
        gallery: 0,
        season: 0,
        teams: 0,
    },
    history: [],
    selectedGame: null,
});

export const getters = {
    selectedTabTeam(state) {
        if (!process.client) return;
        const routeName = $nuxt.$router?.currentRoute?.name;
        const selectedTab = state.pageActiveTabs[routeName];
        return state.ourTeams[selectedTab]?.name || '';
    },
    currentSeasons(state) {
        const dt = new Date();
        const currentYear = dt.getFullYear();
        const currentYearHistory = state.history.find((y) => y.year === currentYear.toString());

        return currentYearHistory?.schedules || [];
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
