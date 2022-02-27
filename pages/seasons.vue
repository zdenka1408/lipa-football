<template>
    <div>
        <l-tabs></l-tabs>
        <div class="mb-6" v-for="(season, i) in selectedTabTeamHistory" :key="i">
            <h3 class="mb-2 text-xl font-semibold">{{ season.year }}</h3>
            <l-schedule v-if="season.schedules && season.schedules[0]" :games="season.schedules[0].games"></l-schedule>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'season',
    computed: {
        ...mapGetters(['selectedTabTeamHistory']),
    },
};
</script>
