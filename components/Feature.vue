<template>
    <div v-editable="blok" class="text-center">
        <h2 class="text-xl font-medium">{{ blok.name }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Feature',
    props: {
        blok: { type: Object, required: true },
    },
};
</script>

<style lang="scss" scoped></style>
