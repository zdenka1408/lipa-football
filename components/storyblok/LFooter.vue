<template functional>
    <footer class="flex flex-col items-center w-full bg-stone-800 text-white">
        <nuxt-link to="/" class="my-0.5 mx-0">
            <img src="@/assets/images/logo.png" alt="logo" height="120" width="120" />
        </nuxt-link>

        <div class="text-lg mb-5">&copy; {{ new Date().getFullYear() }} by Marcus Wiseman</div>
    </footer>
</template>

<script>
export default {
    name: 'LFooter',
};
</script>
