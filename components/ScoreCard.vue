<template>
    <l-popup @close="$emit('close')">
        <template v-slot:title>Výsledková listina</template>
        <template v-slot:content>
            <div>
                <div class="flex justify-between items-center text-5xl p-5 font-semibold bg-green-300 opacity-75">
                    <img
                        class="w-1/5 max-w-40 shadow-md"
                        :src="require('@/assets/images/teams/' + homeTeam.logo)"
                        alt="home team logo"
                        @contextmenu.prevent
                        @dragstart.prevent
                    />
                    <div>{{ game.score.homeTeam }} - {{ game.score.awayTeam }}</div>
                    <img
                        class="w-1/5 max-w-40 shadow-md"
                        :src="require('@/assets/images/teams/' + awayTeam.logo)"
                        alt="away team logo"
                        @contextmenu.prevent
                        @dragstart.prevent
                    />
                </div>

                <div class="flex justify-center text-xl font-semibold py-5">
                    {{ $prettyDate(game.date) }}
                </div>

                <div class="px-5 pb-5">
                    <span class="text-xl font-semibold">Záznam zápasu:</span>
                    <p class="text-justify px-5">{{ game.description }}</p>
                </div>
            </div>
        </template>
    </l-popup>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ScoreCard',
    props: {
        game: { type: Object, required: true },
    },
    computed: {
        ...mapState(['leagueTeams']),
        homeTeam() {
            return this.game && this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.game.homeTeamId)];
        },
        awayTeam() {
            return this.game && this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.game.awayTeamId)];
        },
    },
};
</script>
