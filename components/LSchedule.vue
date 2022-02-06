<template>
    <l-list>
        <l-list-item
            v-for="(game, i) in games"
            :key="i"
            :game="game"
            @click.native="$emit('li-click', game)"
        ></l-list-item>
    </l-list>
</template>

<script>
export default {
    name: 'LSchedule',
    props: {
        games: { type: Array, default: () => [] },
    },
};
</script>
