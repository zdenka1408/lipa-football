<template>
    <div>
        <div class="page-title"></div>
        <l-tabs></l-tabs>

        <l-schedule :games="fakeGames"></l-schedule>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'season',
    computed: {
        ...mapState(['fakeGames']),
    },
};
</script>
