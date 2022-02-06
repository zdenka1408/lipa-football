<template>
    <div>
        <div class="page-title">Fotogalerie</div>
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
};
</script>
