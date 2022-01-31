<template>
    <li
        class="flex justify-between p-3 cursor-pointer border-b last:border-b-0 border-green-600 active:bg-green-600 hover:bg-green-600 active:bg-opacity-75 hover:bg-opacity-50"
        v-if="homeTeam && awayTeam"
    >
        <div class="flex items-center w-1/3 justify-start team team--home">
            <img class="w-10 h-10" :src="require('@/assets/images/teams/' + homeTeam.logo)" alt="home team logo" />
            <span class="text-lg my-0 mx-3.5" v-if="!isMobile()">{{ homeTeam.name }}</span>
        </div>
        <div class="flex flex-col items-center w-2/5 font-semibold stats">
            <div class="text-lg flex flex-col items-center w-2/5 stats__score">
                {{ game.score.homeTeam }} - {{ game.score.awayTeam }}
            </div>
            <div class="text-lg flex flex-col items-center w-2/5 stats__date">{{ $prettyDate(game.date) }}</div>
        </div>
        <div class="flex items-center w-1/3 justify-end team team--away">
            <span class="text-lg my-0 mx-3.5" v-if="!isMobile()">{{ awayTeam.name }}</span>
            <img class="w-10 h-10" :src="require('@/assets/images/teams/' + awayTeam.logo)" alt="away team logo" />
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex';
import helpers from '@/helpers';

export default {
    name: 'LListItem',
    mixins: [helpers],
    props: {
        game: { type: Object, default: () => {} },
    },
    computed: {
        ...mapState(['leagueTeams']),
        homeTeam() {
            return this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.game.homeTeamId)];
        },
        awayTeam() {
            return this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.game.awayTeamId)];
        },
    },
};
</script>
