<template functional>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="props.width"
        :height="props.height"
        viewBox="0 0 24 24"
        :aria-labelledby="props.iconName"
        role="presentation"
    >
        <title :id="props.iconName" lang="en">{{ props.iconName }} icon</title>
        <g :fill="props.iconColor">
            <slot />
        </g>
    </svg>
</template>

<script>
export default {
    name: 'BaseIcon',
    props: {
        iconName: { type: String, required: true },
        iconColor: { type: String, default: '#000000' },
        height: { type: String | Number, default: '24' },
        width: { type: String | Number, default: '24' },
    },
};
</script>
