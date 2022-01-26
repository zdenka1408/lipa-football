<template>
    <div>
        <div class="page-title" :class="{ 'page-title--desktop': !isMobile }">Zápasy</div>
    </div>
</template>

<script>
export default {
    name: 'matches',
    computed: {
        isMobile() {
            return false;
        },
    },
};
</script>
