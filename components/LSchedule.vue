<template>
    <l-list>
        <l-list-item
            v-for="(game, i) in games"
            :key="i"
            :game="game"
            :clickable="clickable"
            @click.native="clickable ? $store.commit('setSelectedGame', game) : null"
        ></l-list-item>
    </l-list>
</template>

<script>
export default {
    name: 'LSchedule',
    props: {
        games: { type: Array, default: () => [] },
        clickable: { type: Boolean, default: true },
    },
};
</script>
