<template>
    <div class="history" :class="{ 'mobile-edge-padding': isMobile }">
        <div class="page-title">Historie</div>
        <l-tabs></l-tabs>

        <transition name="opacity">
            <l-list v-show="!selectedGame">
                <l-list-item
                    v-for="(game, i) in games"
                    :key="i"
                    :game="game"
                    @click.native="liClick(game)"
                ></l-list-item>
            </l-list>
        </transition>

        <transition name="opacity">
            <score-card v-if="delay" :game="selectedGame" @close="closeScoreCard"></score-card>
        </transition>
    </div>
</template>

<script>
import helpers from '@/helpers';

export default {
    name: 'history',
    mixins: [helpers],
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
            delay: false,
        };
    },
    methods: {
        liClick(game) {
            this.selectedGame = game;
            setTimeout(() => {
                this.delay = true;
            }, 500);
        },
        closeScoreCard() {
            this.delay = false;
            setTimeout(() => {
                this.selectedGame = null;
            }, 500);
        },
    },
};
</script>

<style scoped>
/* .history {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;

    &--desktop {
        .history__title {
        }
    }
} */
</style>
