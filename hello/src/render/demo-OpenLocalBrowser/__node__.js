const BrowserHelper = require('../../lib/BrowserHelper');

const tag_a = document.querySelector('a');
tag_a.onclick = function (e) {
    e.preventDefault();
    BrowserHelper.openExternal(tag_a.href);
};
