<template>
    <div class="">
        <component :blok="story.content" :is="story.content.component" class="text-black"></component>
        <l-schedule :games="fakeGames" :clickable="false"></l-schedule>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Home',
    data() {
        return {
            story: { content: {} },
            game: {
                date: new Date(2022, 9, 25, 15, 45, 0),
                homeTeamId: 0,
                awayTeamId: 1,
                score: { homeTeam: 0, awayTeam: 0 },
                description: '',
            },
        };
    },
    computed: {
        ...mapState(['fakeGames']),
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
        const fullSlug = ctx.route.path === '/' || ctx.route.path === '' ? 'home' : ctx.route.path;

        const result = await ctx.app.$storyapi.get(`cdn/stories/${fullSlug}`, {
            version: 'draft',
        });

        if (result?.data) {
            return result.data;
        }
    },
};
</script>
