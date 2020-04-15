let {remote} = require('electron');
let {dialog} = remote;
let Buttons = document.querySelectorAll('button');

Buttons[0].onclick = function (e) {
    alert(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))
};
