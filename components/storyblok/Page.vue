<template>
    <div v-editable="blok">
        <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
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
