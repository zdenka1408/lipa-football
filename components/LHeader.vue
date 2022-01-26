<template>
    <header>
        <nuxt-link to="/" class="header-child logo">
            <img src="@/assets/images/logo.png" alt="logo" height="90" width="90" />
        </nuxt-link>
        <div class="header-child">
            <nav v-if="!mobile || menuOpened" class="nav" :class="{ 'nav--desktop': !mobile, 'nav--mobile': mobile }">
                <transition name="slide-down">
                    <ul v-show="!mobile || ulOpened" @click="openMenu">
                        <nuxt-link
                            v-for="(item, i) in menuItems"
                            :key="i"
                            :to="item.url"
                            v-slot="{ navigate, isExactActive }"
                            custom
                        >
                            <li :class="{ active: isExactActive }" @click="navigate">{{ item.name }}</li>
                        </nuxt-link>
                    </ul>
                </transition>
                <transition name="opacity">
                    <div v-show="ulOpened" class="nav__blur" @click="openMenu"></div>
                </transition>
            </nav>
            <div v-if="mobile || true" class="hamburger-menu" @click="openMenu">
                <base-icon iconName="MenuIcon" iconColor="pink" height="86" width="86">
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
/* header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background: #222;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    color: #fff;
    z-index: 99;
}

.header-child {
    margin: 0 20px;
    display: flex;
    align-items: center;
    max-height: 70px;
    height: 100%;
}

.logo {
    margin-top: 20px;
    z-index: 99;
}

.hamburger-menu {
    cursor: pointer;
    padding: 17px 10px;
}

.nav {
    ul {
        height: 100%;
        z-index: 99;
    }

    li {
        display: flex;
        align-items: center;
        cursor: pointer;

        &.active {
            background: var(--color-main);
        }

        &:hover {
            background: var(--color-main-opacity5);
        }
    }

    &--desktop {
        height: 100%;

        ul {
            display: flex;
        }

        li {
            padding: 0 10px;
            font-size: 22px;
        }
    }

    &--mobile {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        height: 100%;

        ul {
            background: #222;
            height: auto;
            position: absolute;
            left: 0;
            right: 0;
        }

        li {
            padding-left: 10px;
            height: 40px;
            font-size: 20px;
        }
    }

    &__blur {
        height: 100%;
        // filter: blur(10px);
        background: content-box linear-gradient(var(--color-second), var(--color-main-opacity5));
        z-index: 90;
    }
} */
</style>
