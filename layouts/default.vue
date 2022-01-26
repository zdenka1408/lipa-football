<template>
    <div id="app">
        <l-header></l-header>

        <div class="content">
            <nuxt class="page-inner" />
        </div>

        <l-footer></l-footer>
    </div>
</template>

<script>
export default {
    name: 'default',
    computed: {},
};
</script>

<style scoped>
/* .content {
    display: flex;
    padding-top: 70px;

    &--mobile {
        width: 100%;
        min-height: max-content;
    }

    &--desktop {
        max-width: 800px;
        width: 800px;
        // min-height: calc(100vh - 208px);
    }
} */
</style>
