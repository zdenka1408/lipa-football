import Vue from 'vue';

export const state = () => ({
    leagueTeams: [
        { name: 'TJ Sokol Lipa', logo: 'lipa.png', roster: {}, id: 0 },
        { name: 'FCSS', logo: 'fcss.jpg', roster: {}, id: 1 },
    ],
    pageActiveTabs: {
        history: 0,
        gallery: 0,
        matches: 0,
        teams: 0,
    },
    history: {},
    selectedGame: null,
});

export const getters = {
    nextGame(state) {
        const dt = new Date();
        const year = dt.getFullYear();
        let scheduleYear = state.history[year];
        let nextGame;

        const getGame = (arr) => arr.find((game) => new Date(game.date).getTime() > dt.getTime());

        if (scheduleYear) {
            nextGame = getGame(scheduleYear);
        }

        if (!nextGame) {
            scheduleYear = state.history[year + 1];
            if (scheduleYear) {
                nextGame = getGame(scheduleYear);
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
};

export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        try {
            const result = await app.$storyapi.get('cdn/stories/schedule', { version: 'draft' });
            if (result?.data?.story?.content) {
                commit('addSchedule', result.data.story.content);
            }
        } catch (err) {
            console.warn(err);
        }
    },
};
