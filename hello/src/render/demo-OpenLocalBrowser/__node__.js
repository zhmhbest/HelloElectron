const BrowserHelper = require('../lib/renderHelper');

const tag_a = document.querySelector('a');
tag_a.onclick = function (e) {
    e.preventDefault();
    BrowserHelper.openExternal(tag_a.href);
};
