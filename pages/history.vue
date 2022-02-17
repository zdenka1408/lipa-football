<template>
    <div class="flex flex-col pb-48 items-center history">
        <div class="page-title"></div>
        <l-tabs></l-tabs>
        <!-- <l-schedule :games="games"></l-schedule> -->
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'History',
    data() {
        return {
            selectedYear: 2022,
        };
    },
    computed: {
        // ...mapState(['history', 'pageActiveTabs']),
        // selectedTeam() {
        //     this.pageActiveTabs[this.$route.name];
        // },
        // games() {
        //     return this.history[this.selectedTeam][this.selectedYear];
        // },
    },
};
</script>
