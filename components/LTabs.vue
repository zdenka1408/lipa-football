<template>
    <ul class="flex w-full mt-5 mb-6">
        <li
            class="flex items-center justify-center cursor-pointer text-lg w-1/3 py-1 hover:border-b-2 hover:border-green-600 hover:border-opacity-20"
            v-for="(tab, i) in tabs"
            :key="i"
            :class="{ 'border-b-2 border-green-600 hover:border-opacity-100': i === pageActiveTabs[page] }"
            @click="onClick(i)"
        >
            {{ tab }}
        </li>
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
        ...mapState(['pageActiveTabs']),
        page() {
            return this.$route.name;
        },
    },
    methods: {
        onClick(i) {
            this.$store.commit('setActiveTab', { page: this.page, tab: i });
        },
    },
};
</script>
