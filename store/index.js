export const state = () => ({
    leagueTeams: [
        { name: 'TJ Sokol Lipa', logo: 'lipa.png', roster: {}, id: 0 },
        { name: 'FCSS', logo: 'fcss.jpg', roster: {}, id: 1 },
    ],
    activeTab: 0,
});

export const mutations = {
    activeTab(state, t) {
        state.activeTab = t;
    },
};

export const actions = {};
