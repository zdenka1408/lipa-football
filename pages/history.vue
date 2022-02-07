<template>
    <div class="flex flex-col pb-48 items-center history">
        <div class="page-title"></div>
        <l-tabs></l-tabs>
        <l-schedule :games="fakeGames"></l-schedule>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'history',
    computed: {
        ...mapState(['fakeGames']),
    },
};
</script>
