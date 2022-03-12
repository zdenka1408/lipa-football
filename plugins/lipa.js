export default ({}, inject) => {
    inject('prettyDate', (uglyDate) => {
        return new Date(uglyDate).toLocaleDateString();
    });
};
