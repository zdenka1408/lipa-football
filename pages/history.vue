<template>
    <div class="flex flex-col pb-48 items-center history">
        <div class="page-title">Historie</div>
        <l-tabs></l-tabs>

        <l-list>
            <l-list-item v-for="(game, i) in games" :key="i" :game="game" @click.native="liClick(game)"></l-list-item>
        </l-list>

        <transition name="opacity">
            <l-popup v-if="selectedGame" @close="closePopup">
                <template v-slot:title>Výsledková listina</template>
                <template v-slot:content>
                    <div>
                        <div
                            class="flex justify-between items-center text-5xl p-5 font-semibold bg-green-300 opacity-75"
                        >
                            <img
                                class="w-1/5 max-w-40 shadow-md"
                                :src="require('@/assets/images/teams/' + homeTeam.logo)"
                                alt="home team logo"
                            />
                            <div>{{ selectedGame.score.homeTeam }} - {{ selectedGame.score.awayTeam }}</div>
                            <img
                                class="w-1/5 max-w-40 shadow-md"
                                :src="require('@/assets/images/teams/' + awayTeam.logo)"
                                alt="away team logo"
                            />
                        </div>

                        <div class="flex justify-center text-xl font-semibold py-5">
                            {{ $prettyDate(selectedGame.date) }}
                        </div>

                        <div class="px-5 pb-5">
                            <span class="text-xl font-semibold">Záznam zápasu:</span>
                            <p class="text-justify px-5">{{ selectedGame.description }}</p>
                        </div>
                    </div>
                </template>
            </l-popup>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex';

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
    computed: {
        ...mapState(['leagueTeams']),
        homeTeam() {
            return (
                this.selectedGame &&
                this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.selectedGame.homeTeamId)]
            );
        },
        awayTeam() {
            return (
                this.selectedGame &&
                this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.selectedGame.awayTeamId)]
            );
        },
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
