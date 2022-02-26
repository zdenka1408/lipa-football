<template>
    <div>
        <div class="page-title"></div>
        <l-tabs></l-tabs>

        <l-schedule :games="games"></l-schedule>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    name: 'season',
    computed: {
        ...mapState(['pageActiveTabs']),
        ...mapGetters(['currentSeasons', 'selectedTabTeam']),
        games() {
            const selectedTeamsSchedule = this.currentSeasons?.find((s) => s.team === this.selectedTabTeam);
            return selectedTeamsSchedule?.games || [];
        },
    },
};
</script>
