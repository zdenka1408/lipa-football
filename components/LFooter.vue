<template>
    <footer>
        <nuxt-link to="/" class="logo">
            <img src="@/assets/images/logo.png" alt="logo" height="120" width="120" />
        </nuxt-link>

        <div class="copyright">&copy; {{ new Date().getFullYear() }} by Zdenka Wiseman</div>
    </footer>
</template>

<script>
export default {
    name: 'LFooter',
};
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #222;
    width: 100%;
    color: #fff;
}

.logo {
    margin: 20px 0;
}

.copyright {
    font-size: 18px;
    margin-bottom: 20px;
}
</style>
