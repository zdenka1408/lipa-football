<template>
    <li
        class="flex justify-between p-3 border-b last:border-b-0 border-green-600"
        :class="{
            'active:bg-green-600 active:bg-opacity-75 hover:bg-green-600 hover:bg-opacity-50 cursor-pointer': clickable,
        }"
        v-if="homeTeam && awayTeam"
    >
        <div class="flex items-center w-1/3 justify-start team team--home">
            <img class="w-10 h-10" :src="require('@/assets/images/teams/' + homeTeam.logo)" alt="home team logo" />
            <span class="text-lg my-0 mx-3.5" v-if="!$isMobile()">{{ homeTeam.name }}</span>
        </div>
        <div class="flex flex-col items-center w-2/5 font-semibold stats">
            <div class="text-lg flex flex-col items-center w-2/5 stats__score" v-if="!isFutureGame">
                {{ game.homeTeamScore }} - {{ game.awayTeamScore }}
            </div>
            <div class="text-lg flex flex-col items-center w-2/5 stats__date">{{ $prettyDate(game.date) }}</div>
        </div>
        <div class="flex items-center w-1/3 justify-end team team--away">
            <span class="text-lg my-0 mx-3.5" v-if="!$isMobile()">{{ awayTeam.name }}</span>
            <img class="w-10 h-10" :src="require('@/assets/images/teams/' + awayTeam.logo)" alt="away team logo" />
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'LListItem',
    props: {
        game: { type: Object, default: () => {} },
        clickable: { type: Boolean, default: true },
    },
    computed: {
        ...mapState(['leagueTeams']),
        homeTeam() {
            return this.leagueTeams.find((t) => t.id === parseInt(this.game.homeTeamId));
        },
        awayTeam() {
            return this.leagueTeams.find((t) => t.id === parseInt(this.game.awayTeamId));
        },
        isFutureGame() {
            return new Date().getTime() - new Date(this.game.date).getTime() < 0;
        },
    },
};
</script>
