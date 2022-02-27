<template>
    <div>
        <l-tabs></l-tabs>

        <div class="w-full grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            <img
                v-for="(pic, i) in pics"
                :key="i"
                :src="require(`@/assets/images/test/${activeTab}/${pic}`)"
                alt=""
                class="w-full h-64 rounded-md object-cover"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'gallery',
    data() {
        return {
            story: { content: {} },
            picObj: {
                a: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
                b: ['1.jpg', '2.jpg', '3.jpg'],
                jr: ['1.jpg', '2.jpg', '3.jpg'],
            },
        };
    },
    computed: {
        ...mapState(['pageActiveTabs']),
        activeTab() {
            const arr = ['a', 'b', 'jr'];
            return arr[this.pageActiveTabs.gallery];
        },
        pics() {
            return this.picObj[this.activeTab];
        },
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
        const result = await ctx.app.$storyapi.get('cdn/stories/gallery', {
            version: 'draft',
        });

        if (result?.data) {
            return result.data;
        }
    },
};
</script>
