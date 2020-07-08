const BrowserHelper = require('../lib/renderHelper');

let btn = document.querySelector('button');
btn.onclick = function (e) {
    BrowserHelper.setClipboardText('!Changed!');
};