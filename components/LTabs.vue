<template>
    <ul>
        <li v-for="(tab, i) in tabs" :key="i" :class="{ active: i === activeTab }" @click="onClick(i)">{{ tab }}</li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'LTabs',
    data() {
        return {
            tabs: ['Tým A', 'Tým B', 'Juniors'],
        };
    },
    computed: {
        ...mapState(['activeTab']),
    },
    methods: {
        onClick(i) {
            this.$store.commit('activeTab', i);
        },
    },
};
</script>

<style scoped>
/* ul {
    display: flex;
    width: 100%;
    margin: 18px 0 24px 0;
}

li {
    color: var(--color-text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    width: calc(100% / 3);
    padding: 4px 0;

    &.active {
        border-bottom: 1px solid var(--color-main);
    }

    &:hover {
        border-bottom: 1px solid var(--color-main-opacity5);
    }
} */
</style>
