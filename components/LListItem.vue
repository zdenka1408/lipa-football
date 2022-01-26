<template>
    <li v-if="homeTeam && awayTeam">
        <div class="team team--home">
            <img :src="require('@/assets/images/teams/' + homeTeam.logo)" alt="home team logo" />
            <span v-if="!isMobile">{{ homeTeam.name }}</span>
        </div>
        <div class="stats">
            <div class="stats__score">{{ game.score.homeTeam }} - {{ game.score.awayTeam }}</div>
            <div class="stats__date">{{ $prettyDate(game.date) }}</div>
        </div>
        <div class="team team--away">
            <span v-if="!isMobile">{{ awayTeam.name }}</span>
            <img :src="require('@/assets/images/teams/' + awayTeam.logo)" alt="away team logo" />
        </div>
    </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'LListItem',
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
        isMobile() {
            return false;
        },
    },
};
</script>

<style scoped>
/* li {
    display: flex;
    justify-content: space-between;
    padding: 14px;
    border-bottom: 1px solid var(--color-main-opacity2);
    cursor: pointer;

    &:active,
    &:hover {
        background: var(--color-main-opacity2);
    }

    &:last-child {
        border-bottom: none;
    }
}

.team {
    display: flex;
    align-items: center;
    width: 30%;

    img {
        width: 40px;
        height: 40px;
    }

    span {
        font-size: 18px;
        margin: 0 14px;
    }

    &--home {
        justify-content: flex-start;
    }

    &--away {
        justify-content: flex-end;
    }
}

.stats {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;

    &__score {
        font-size: 22px;
        font-weight: 600;
    }
} */
</style>
