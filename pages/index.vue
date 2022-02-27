<template>
    <div class="">
        <component :blok="story.content" :is="story.content.component"></component>
        <l-schedule
            v-if="upcomingGamesTeamA && upcomingGamesTeamA.length"
            :games="upcomingGamesTeamA"
            :clickable="false"
        ></l-schedule>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Home',
    data() {
        return {
            story: { content: {} },
        };
    },
    computed: {
        ...mapGetters(['upcomingGamesTeamA']),
    },
    mounted() {
        this.$storybridge(
            () => {
                const storyBlokInstance = new StoryblokBridge();

                storyBlokInstance.on(['input', 'published', 'change'], ($event) => {
                    if ($event.action === 'input') {
                        if ($event.story.id === this.story.id) {
                            this.story.content = $event.story.content;
                        }
                    } else {
                        this.$nuxt.$router.go({
                            path: this.$nuxt.$router.currentRoute,
                            force: true,
                        });
                    }
                });
            },
            (error) => {
                console.error(error);
            }
        );
    },
    async asyncData(ctx) {
        const result = await ctx.app.$storyapi.get('cdn/stories/home', {
            version: 'draft',
        });
        if (result?.data) {
            return result.data;
        }
    },
};
</script>
