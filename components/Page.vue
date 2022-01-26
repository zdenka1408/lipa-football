<template>
    <div v-editable="blok" class="px-6">
        <component v-for="blok in blok.body" :key="blok._uid" :blok="blok" :is="blok.component"></component>
    </div>
</template>

<script>
export default {
    name: 'Page',
    props: {
        blok: { type: Object, required: true },
    },
};
</script>
