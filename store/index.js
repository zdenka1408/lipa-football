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
});

export const mutations = {
    setActiveTab(state, obj) {
        state.pageActiveTabs[obj.page] = obj.tab;
    },
};

export const actions = {};
