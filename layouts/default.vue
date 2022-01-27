<template>
    <div id="app" class="text-stone-900 bg-white dark:text-white dark:bg-stone-500">
        <l-header></l-header>

        <div class="flex pt-20 w-full">
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

<style>
:root {
    --main-color: '#00a14f';
}
/* .content {

    &--mobile {
        min-height: max-content;
    }

    &--desktop {
        max-width: 800px;
        width: 800px;
        // min-height: calc(100vh - 208px);
    }
} */
</style>
