<template>
    <div class="h-full">
        <StoryblokComponent v-if="story" :blok="story.content" />
        <div v-if="isMobile" class="h-1/2">j</div>
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
        isMobile() {
            return this.$device.isMobileOrTablet;
        },
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
