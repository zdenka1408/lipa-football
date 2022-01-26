<template>
    <div>
        <div class="page-title" :class="{ 'page-title--desktop': !isMobile }">Fotogalerie</div>
        <l-tabs></l-tabs>
    </div>
</template>

<script>
export default {
    name: 'gallery',
    computed: {
        isMobile() {
            return false;
        },
    },
};
</script>
