<template>
    <ul class="flex w-full mt-5 mb-6">
        <li
            class="flex items-center justify-center cursor-pointer text-lg w-1/3 py-1 hover:border-b-2 hover:border-green-600 hover:border-opacity-20"
            v-for="(tab, i) in tabs"
            :key="i"
            :class="{ 'border-b-2 border-green-600 hover:border-opacity-100': i === pageActiveTabs[$route.name] }"
            @click="$store.commit('setActiveTab', { page: $route.name, tab: i })"
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
            tabs: ['Tým A', 'Tým B', 'Tym dorost'],
        };
    },
    computed: {
        ...mapState(['pageActiveTabs']),
    },
};
</script>
