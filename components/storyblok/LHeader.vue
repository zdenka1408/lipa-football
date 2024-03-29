<template>
    <header class="bg-stone-800 text-white flex fixed items-center justify-between top-0 left-0 right-0 h-20 z-40">
        <nuxt-link to="/" class="flex items-center h-full max-h-20 my-0 mx-5 z-40 mt-5">
            <img src="@/assets/images/logo.png" alt="logo" height="90" width="90" />
        </nuxt-link>
        <div class="flex items-center h-full max-h-20 my-0 mx-5">
            <nav
                v-if="!isMobile || menuOpened"
                class="fixed top-20 left-0 w-full h-full lg:relative lg:top-auto lg:left-auto lg:w-auto"
            >
                <transition name="slide-down">
                    <ul
                        v-show="!isMobile || ulOpened"
                        class="bg-stone-800 h-auto absolute left-0 right-0 z-40 py-5 lg:flex lg:py-0 lg:h-full lg:relative lg:left-auto lg:right-auto"
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
                                class="active:bg-green-600 hover:bg-green-600 hover:bg-opacity-50 flex items-center cursor-pointer pl-2.5 py-6 h-10 text-xl lg:py-0 lg:px-2.5 lg:h-auto lg:text-2xl"
                                :class="{ active: isExactActive }"
                                @click="navigate"
                            >
                                {{ item.name }}
                            </li>
                        </nuxt-link>
                    </ul>
                </transition>
                <transition name="opacity">
                    <div v-show="ulOpened" class="h-full z-30 bg-green-100 bg-opacity-70" @click="openMenu"></div>
                </transition>
            </nav>

            <div v-if="isMobile" class="cursor-pointer py-4 px-2.5" @click="openMenu">
                <base-icon iconName="MenuIcon" iconColor="#ffffff" height="32" width="32">
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
                { name: 'Sezóny', url: '/seasons' },
                { name: 'Týmy', url: '/teams' },
                { name: 'Fotogalerie', url: '/gallery' },
            ],
            menuOpened: false,
            ulOpened: false,
            inTransition: false,
        };
    },
    computed: {
        isMobile() {
            return this.$device.isMobileOrTablet;
        },
    },
    methods: {
        openMenu() {
            if (this.inTransition || !this.isMobile) return;
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
