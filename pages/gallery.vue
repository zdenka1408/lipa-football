<template>
    <div>
        <l-tabs></l-tabs>
        <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
</template>

<script>
import { useStoryblokBridge, useStoryblokApi } from '@storyblok/nuxt';

export default {
    name: 'gallery',
    mounted() {
        useStoryblokBridge(this.story.id, (newStory) => (this.story = newStory));
    },
    async asyncData() {
        const storyblokApi = useStoryblokApi();
        const { data } = await storyblokApi.get('cdn/stories/gallery', {
            version: 'draft',
        });
        return { story: data.story };
    },
};
</script>
