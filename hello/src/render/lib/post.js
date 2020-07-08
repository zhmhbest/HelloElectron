const path = require('path');
const PATH_RENDER = path.resolve(path.join(__dirname, '..'));

module.exports = {
    postWindow: function(location, channel, callback) {
        const sub_path = path.join(PATH_RENDER, location);
        if (undefined !== channel && 0 !== channel.length) {
            window.addEventListener(channel, (msg) => {
                callback(msg);
            });
        }
        window.open(path.join(sub_path, 'index.html'));
    }
}