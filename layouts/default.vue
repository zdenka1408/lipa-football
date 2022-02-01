<template>
    <div
        id="app"
        class="flex flex-col items-center justify-between pt-20 w-screen h-screen text-stone-900 bg-white dark:text-white dark:bg-stone-500"
    >
        <l-header></l-header>

        <div class="min-h-max w-full px-3.5 lg:w-2/3 lg:max-w-4xl lg:px-0">
            <nuxt />
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

.slide-down-enter-active,
.slide-down-leave-active {
    transition-property: clip;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.slide-down-enter,
.slide-down-leave-to {
    clip: rect(auto, auto, 0, auto);
}

.slide-down-enter-to,
.slide-down-leave {
    clip: rect(auto, auto, 200px, auto);
}

.opacity-enter-active,
.opacity-leave-active {
    transition: opacity 0.5s ease;
}

.opacity-enter,
.opacity-leave-to {
    opacity: 0;
}

.opacity-enter-to,
.opacity-leave {
    opacity: 1;
}
</style>
