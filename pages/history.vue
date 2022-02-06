<template>
    <div class="flex flex-col pb-48 items-center history">
        <div class="page-title"></div>
        <l-tabs></l-tabs>
        <l-schedule :games="fakeGames" @li-click="liClick"></l-schedule>

        <score-card v-if="selectedGame" :game="selectedGame" @close="selectedGame = null"></score-card>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'history',
    data() {
        return {
            selectedGame: null,
        };
    },
    computed: {
        ...mapState(['fakeGames']),
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
