export default {
    methods: {
        isMobile() {
            return process.client && window.innerWidth < 1024;
        },
    },
};
