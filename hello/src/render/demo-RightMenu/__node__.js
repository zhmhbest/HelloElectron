const BrowserHelper = require('../../lib/BrowserHelper');

BrowserHelper.setMenuRight([
    {
        label: 'A',
        submenu: [
            {label: 'A1', click: ()=>{ alert('A1') }, accelerator: 'ctrl+1'},
            {label: 'A2', click: ()=>{ alert('A2') }, accelerator: 'ctrl+2'},
        ]
    },
    {
        label: 'B',
        submenu: [
            {label: 'B1', click: ()=>{ alert('B1') }},
            {label: 'B2', click: ()=>{ alert('B2') }},
        ]
    }
]);
