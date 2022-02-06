<template>
    <div
        class="flex flex-col justify-end text-white h-4/5 lg:h-96 bg-no-repeat bg-center bg-cover bg-[url('/hero.jpg')]"
    >
        <div v-if="showTime && isMobile()" class="flex items-center justify-center h-28 lg:h-32 font-bold text-4xl">
            <span class="fuzz">{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}</span>
        </div>

        <div class="flex items-center justify-center h-28 lg:h-32">
            <div class="flex flex-col items-center w-1/2 lg:w-1/3">
                <img
                    :src="require('@/assets/images/teams/' + homeTeam.logo)"
                    alt="home team logo"
                    height="100"
                    width="100"
                />
            </div>
            <div v-if="!isMobile()" class="flex flex-col items-center w-1/2 lg:w-1/3 text-6xl font-bold">
                <span v-if="showTime" class="fuzz">{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}</span>
            </div>
            <div class="flex flex-col items-center w-1/2 lg:w-1/3">
                <img
                    :src="require('@/assets/images/teams/' + awayTeam.logo)"
                    alt="away team logo"
                    height="100"
                    width="100"
                />
            </div>
        </div>

        <div class="flex items-center justify-center h-28 lg:h-32">
            <span v-if="!isMobile()" class="flex flex-col items-center w-1/2 lg:w-1/3 text-3xl font-bold fuzz">{{
                homeTeam.name
            }}</span>
            <div class="flex flex-col items-center w-1/2 lg:w-1/3 text-2xl font-bold">
                <span class="fuzz">{{ gameDay }}</span>
                <span class="fuzz">{{ gameTime }}</span>
            </div>
            <span v-if="!isMobile()" class="flex flex-col items-center w-1/2 lg:w-1/3 text-3xl font-bold fuzz">{{
                awayTeam.name
            }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import helpers from '@/helpers';

export default {
    name: 'LHero',
    mixins: [helpers],
    props: {
        nextGame: { type: Object, required: true },
    },
    data() {
        return {
            nextGameDateTime: null,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            countingDown: null,
            showTime: false,
        };
    },
    computed: {
        ...mapState(['leagueTeams']),
        homeTeam() {
            return this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.nextGame.homeTeamId)];
        },
        awayTeam() {
            return this.leagueTeams[this.leagueTeams.findIndex((x) => x.id === this.nextGame.awayTeamId)];
        },
        gameTime() {
            if (!this.nextGame || !this.nextGame.date) return null;
            const d = new Date(this.nextGame.date);
            return d.getHours() + ':' + d.getMinutes();
        },
        gameDay() {
            if (!this.nextGame || !this.nextGame.date) return null;
            return this.$prettyDate(this.nextGame.date);
        },
    },
    mounted() {
        if (!this.nextGame || !this.nextGame.date) return;
        this.nextGameDateTime = new Date(this.nextGame.date).getTime();

        this.countingDown = setInterval(() => {
            const timeNow = new Date().getTime();
            const timeleft = this.nextGameDateTime - timeNow;
            if (timeleft <= 0) {
                this.showTime = false;
                clearInterval(this.countingDown);
            }

            this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

            if (!this.showTime) this.showTime = true;
        }, 1000);
    },
    beforeDestroy() {
        if (this.countingDown) clearInterval(this.countingDown);
    },
};
</script>

<style scoped>
.fuzz {
    text-shadow: 0 0 16px #000;
}
</style>
