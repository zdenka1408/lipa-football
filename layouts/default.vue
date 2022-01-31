<template>
    <div id="app" class="text-stone-900 bg-white dark:text-white dark:bg-stone-500">
        <l-header></l-header>

        <div class="flex justify-center pt-20 w-full">
            <nuxt class="min-h-max w-full px-3.5 lg:w-2/3 lg:max-w-4xl lg:px-0" />
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
</style>
