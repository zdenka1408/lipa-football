<template>
    <div></div>
</template>

<script>
export default {
    name: 'teams',
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
};
</script>
