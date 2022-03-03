<template>
    <div v-editable="blok" v-if="selectedTabTeam === blok.team">
        <div
            class="w-full grid gap-4 lg:grid-cols-2 2xl:grid-cols-3 mb-10"
            v-for="album in blok.albums"
            :key="album._uid"
        >
            <h3 class="mb-3">{{ album.title || '' }}</h3>
            <img
                class="w-full h-64 rounded-md object-cover"
                v-for="(photo, i) in album.photos"
                :key="i"
                :src="photo.filename"
                :alt="album.title || 'team photo'"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PhotoGallery',
    props: {
        blok: { type: Object, required: true },
    },
    computed: {
        ...mapGetters(['selectedTabTeam']),
    },
};
</script>

<style lang="scss" scoped></style>
