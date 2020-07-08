const BrowserHelper = require('../../lib/BrowserHelper');

let btn = document.querySelector('button');
btn.onclick = function (e) {
    BrowserHelper.setClipboardText('!Changed!');
};