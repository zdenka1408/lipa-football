<template>
    <div
        class="w-screen h-screen fixed left-0 top-0 flex items-center justify-center z-40 bg-black/70"
        @click="$emit('close')"
    >
        <transition name="opacity">
            <div
                v-if="visible"
                @click.stop
                class="rounded w-full h-full lg:w-2/3 lg:h-2/3 bg-white relative p-9 select-none"
            >
                <!-- Closer -->
                <div class="absolute top-0 left-0 p-4" @click="$emit('close')">
                    <base-icon iconName="CloserIcon" iconColor="#000000" height="32" width="32">
                        <closer-icon></closer-icon>
                    </base-icon>
                </div>

                <!-- Title -->
                <div class="flex justify-center text-4xl">
                    <slot name="title"></slot>
                </div>
                <!-- Content -->
                <div class="flex justify-center text-lg mt-6">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import CloserIcon from '@/components/icons/CloserIcon';
export default {
    name: 'LPopup',
    components: { CloserIcon },
    data() {
        return {
            visible: false,
        };
    },
    mounted() {
        this.visible = true;
    },
};
</script>
