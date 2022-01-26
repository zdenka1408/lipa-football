<template>
    <component :blok="story.content" :is="story.content.component"></component>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            story: { content: {} },
        };
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
