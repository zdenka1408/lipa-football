<template>
    <div class="flex flex-col pb-48 items-center history">
        <div class="page-title"></div>
        <l-tabs></l-tabs>

        <l-list>
            <l-list-item v-for="(game, i) in games" :key="i" :game="game" @click.native="liClick(game)"></l-list-item>
        </l-list>

        <score-card v-if="selectedGame" :game="selectedGame" @close="selectedGame = null"></score-card>
    </div>
</template>

<script>
export default {
    name: 'history',
    data() {
        return {
            games: [
                {
                    date: new Date(2021, 9, 25, 15, 45, 0),
                    homeTeamId: 0,
                    awayTeamId: 1,
                    score: { homeTeam: 2, awayTeam: 1 },
                    description: `The standard Lorem Ipsum passage, used since the 1500s
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
                },
                {
                    date: new Date(2021, 9, 25, 15, 45, 0),
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
            selectedGame: null,
        };
    },

    methods: {
        liClick(game) {
            this.selectedGame = game;
        },
        closePopup() {
            this.selectedGame = null;
        },
    },
};
</script>
