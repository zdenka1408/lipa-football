<template>
    <div>
        <div class="page-title" :class="{ 'page-title--desktop': !isMobile }">Týmy</div>
    </div>
</template>

<script>
export default {
    name: 'teams',
    computed: {
        isMobile() {
            return false;
        },
    },
};
</script>
