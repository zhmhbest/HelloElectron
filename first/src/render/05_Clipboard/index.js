let {clipboard} = require('electron');
let button1 = document.querySelectorAll('button')[0];

button1.onclick = function (e) {
    clipboard.writeText('!Changed!')
};