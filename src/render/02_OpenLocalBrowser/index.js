let As = document.querySelectorAll('a');
let {shell} = require('electron');

As[0].onclick = function (e) {
    e.preventDefault();
    shell.openExternal(As[0].href);
};

