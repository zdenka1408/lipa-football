<template>
    <div class="">
        <StoryblokComponent v-if="story" :blok="story.content" />
        <l-schedule
            v-if="upcomingGamesTeamA && upcomingGamesTeamA.length"
            :games="upcomingGamesTeamA"
            :clickable="false"
        ></l-schedule>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { useStoryblokBridge, useStoryblokApi } from '@storyblok/nuxt';

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['upcomingGamesTeamA']),
    },
    mounted() {
        useStoryblokBridge(this.story.id, (newStory) => (this.story = newStory));
    },
    async asyncData() {
        const storyblokApi = useStoryblokApi();
        const { data } = await storyblokApi.get('cdn/stories/home', {
            version: 'draft',
        });
        return { story: data.story };
    },
};
</script>
