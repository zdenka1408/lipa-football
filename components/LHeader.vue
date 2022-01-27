<template>
    <header class="bg-stone-800 text-white flex fixed items-center justify-between top-0 left-0 w-full h-20 z-40">
        <nuxt-link to="/" class="flex items-center h-full max-h-20 my-0 mx-5 z-40 mt-5">
            <img src="@/assets/images/logo.png" alt="logo" height="90" width="90" />
        </nuxt-link>
        <div class="flex items-center h-full max-h-20 my-0 mx-5">
            <nav
                v-if="!mobile || menuOpened"
                class="fixed top-24 left-0 w-full h-full lg:relative lg:top-auto lg:left-auto lg:w-auto"
            >
                <transition name="slide-down">
                    <ul
                        v-show="!mobile || ulOpened"
                        class="bg-stone-800 h-auto absolute left-0 right-0 z-40 lg:flex lg:h-full lg:relative lg:left-auto lg:right-auto"
                        @click="openMenu"
                    >
                        <nuxt-link
                            v-for="(item, i) in menuItems"
                            :key="i"
                            :to="item.url"
                            v-slot="{ navigate, isExactActive }"
                            custom
                        >
                            <li
                                class="active:bg-green-600 hover:bg-green-600 hover:bg-opacity-50 flex items-center cursor-pointer pl-2.5 h-10 text-xl lg:py-0 lg:px-2.5 lg:h-auto lg:text-2xl"
                                :class="{ active: isExactActive }"
                                @click="navigate"
                            >
                                {{ item.name }}
                            </li>
                        </nuxt-link>
                    </ul>
                </transition>
                <transition name="opacity">
                    <div v-show="ulOpened" class="h-full z-30" @click="openMenu"></div>
                </transition>
            </nav>
            <div v-if="mobile" class="cursor-pointer py-4 px-2.5" @click="openMenu">
                <base-icon iconName="MenuIcon" iconColor="pink">
                    <menu-icon></menu-icon>
                </base-icon>
            </div>
        </div>
    </header>
</template>

<script>
import MenuIcon from '@/components/icons/MenuIcon';

export default {
    name: 'LHeader',
    components: { MenuIcon },
    data() {
        return {
            menuItems: [
                { name: 'Home', url: '/' },
                { name: 'Týmy', url: '/teams' },
                { name: 'Historie', url: '/history' },
                { name: 'Fotogalerie', url: '/gallery' },
                { name: 'Zápasy', url: '/matches' },
            ],
            menuOpened: false,
            ulOpened: false,
            inTransition: false,
        };
    },
    computed: {
        mobile() {
            return false;
        },
    },
    methods: {
        openMenu() {
            if (this.inTransition || !this.mobile) return;
            this.inTransition = true;

            if (this.menuOpened) {
                this.ulOpened = false;

                setTimeout(() => {
                    this.menuOpened = false;
                    this.inTransition = false;
                }, 400);
            } else {
                this.menuOpened = true;

                setTimeout(() => {
                    this.ulOpened = true;

                    setTimeout(() => {
                        this.inTransition = false;
                    }, 500);
                }, 10);
            }
        },
    },
};
</script>

<style scoped>
/*
.nav {
    &__blur {
        background: content-box linear-gradient(var(--color-second), var(--color-main-opacity5));
    }
} */
</style>
