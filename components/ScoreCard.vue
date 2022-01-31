<template>
    <div class="card">
        <div class="closer" @click="$emit('close')">
            <base-icon iconName="CloserIcon" iconColor="pink">
                <closer-icon></closer-icon>
            </base-icon>
        </div>

        <div class="card__title">Výsledková listina</div>

        <div class="card__result" :class="{ 'card__result--desktop': !isMobile() }">
            <img :src="require('@/assets/images/teams/' + homeTeam.logo)" alt="home team logo" />
            <div>{{ game.score.homeTeam }} - {{ game.score.awayTeam }}</div>
            <img :src="require('@/assets/images/teams/' + awayTeam.logo)" alt="away team logo" />
        </div>

        <div class="card__date">{{ $prettyDate(game.date) }}</div>

        <div class="card__description">
            <span>Záznam zápasu:</span>
            <p>{{ game.description }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import CloserIcon from '@/components/icons/CloserIcon';
import helpers from '@/helpers';

export default {
    name: 'ScoreCard',
    mixins: [helpers],
    props: {
        game: { type: Object, default: () => {} },
    },
    components: { CloserIcon },
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

<style scoped>
/* .card {
    position: relative;
    width: 90%;
    box-shadow: var(--shadow-outline);
    padding: 30px 0 20px 0;

    &__title {
        display: flex;
        justify-content: center;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 30px;
    }

    &__result {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 48px;
        font-weight: 600;
        padding: 20px;
        background: var(--color-main-opacity2);

        img {
            width: 20%;
            max-width: 160px;
            box-shadow: 4px 4px 10px 3px rgba(0, 0, 0, 0.2);
        }

        &--desktop {
            padding: 20px 40px;
            font-size: 64px;
        }
    }

    &__date {
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-weight: 600;
        padding: 30px 0;
    }

    &__description {
        padding: 0 20px 10px 20px;

        span {
            font-size: 20px;
            font-weight: 600;
        }

        p {
            padding: 0 20px;
            text-align: justify;
        }
    }
}

.closer {
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;
    z-index: 1;
    cursor: pointer;

    svg {
        height: 26px;
        width: 26px;
    }
} */
</style>
