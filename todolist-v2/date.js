
exports.getDate = function () {
    let today = new Date();


    return today.getFullYear() + "/" + parseInt(today.getMonth() + 1) + "/" + today.getDate();
}

exports.getDay = function () {
    let today = new Date();
    let options = {
        weekday: 'long',
    };

    return today.toLocaleDateString("en-US", options);
}

