<template>
    <div>
        <!-- <div class="page-title"></div>
        <l-tabs></l-tabs>

        <l-schedule :games="games"></l-schedule> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'season',
    computed: {
        // ...mapState(['history', 'pageActiveTabs']),
        // selectedTeam() {
        //     this.pageActiveTabs[this.$route.name];
        // },
        // games() {
        //     return this.history[this.selectedTeam][new Date().getFullYear()];
        // },
    },
};
</script>
