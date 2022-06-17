exports.blogData = function () {
    let today = new Date();
    let options = {
        weekday: 'long',
    };

    return today.toLocaleDateString("en-US", options);
}