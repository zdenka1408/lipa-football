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
    selectedGame: null,
    fakeGames: [
        {
            date: new Date(2021, 9, 25, 15, 45, 0),
            homeTeamId: 0,
            awayTeamId: 1,
            score: { homeTeam: 2, awayTeam: 1 },
            description: `The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
        },
        {
            date: new Date(2022, 9, 25, 15, 45, 0),
            homeTeamId: 1,
            awayTeamId: 0,
            score: { homeTeam: 2, awayTeam: 1 },
            description: `The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
        },
        {
            date: new Date(2021, 9, 25, 15, 45, 0),
            homeTeamId: 0,
            awayTeamId: 1,
            score: { homeTeam: 2, awayTeam: 1 },
            description: `The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
        },
    ],
});

export const mutations = {
    setActiveTab(state, obj) {
        state.pageActiveTabs[obj.page] = obj.tab;
    },
    setSelectedGame(state, game) {
        state.selectedGame = game;
    },
};

export const actions = {};
