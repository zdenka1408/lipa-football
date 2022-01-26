<template>
    <div class="hero">
        <div v-if="showTime && isMobile" class="hero__row hero__row--mobile hero__countdown hero__countdown--mobile">
            <span class="fuzz">{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}</span>
        </div>

        <div class="hero__row" :class="{ 'hero__row--mobile': isMobile }">
            <div class="hero__row__item">
                <img
                    :src="require('@/assets/images/teams/' + homeTeam.logo)"
                    alt="home team logo"
                    height="100"
                    width="100"
                />
            </div>
            <div v-if="!isMobile" class="hero__row__item hero__countdown">
                <span v-if="showTime" class="fuzz">{{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}</span>
            </div>
            <div class="hero__row__item">
                <img
                    :src="require('@/assets/images/teams/' + awayTeam.logo)"
                    alt="away team logo"
                    height="100"
                    width="100"
                />
            </div>
        </div>

        <div class="hero__row" :class="{ 'hero__row--mobile': isMobile }">
            <span v-if="!isMobile" class="hero__row__item hero__name fuzz">{{ homeTeam.name }}</span>
            <div class="hero__row__item hero__date">
                <span class="fuzz">{{ gameDay }}</span>
                <span class="fuzz">{{ gameTime }}</span>
            </div>
            <span v-if="!isMobile" class="hero__row__item hero__name fuzz">{{ awayTeam.name }}</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'LHero',
    props: {
        nextGame: { type: Object, default: () => null },
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
        isMobile() {
            return false;
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
/* .hero {
    background: no-repeat center url('../assets/images/hero.jpg');
    background-size: cover;
    height: 600px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;

    &__row {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 140px;

        &__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 30%;
        }

        &--mobile {
            height: 120px;

            .hero__row__item {
                width: 50%;
            }
        }
    }

    &__name {
        font-size: 30px;
        font-weight: 700;
    }

    &__countdown {
        font-size: 64px;
        font-weight: 700;

        &--mobile {
            font-size: 42px;
        }
    }

    &__date {
        font-size: 24px;
        font-weight: 700;
    }
}

.fuzz {
    text-shadow: 0 0 16px #000;
} */
</style>
