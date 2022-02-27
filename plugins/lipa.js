export default ({}, inject) => {
    inject('prettyDate', (uglyDate) => {
        return new Date(uglyDate).toLocaleDateString();
    });
    inject('isMobile', () => {
        return process.client && window.innerWidth < 1024;
    });
};
