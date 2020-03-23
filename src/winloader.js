const path = require('path');
const { remote } = require('electron');
const { BrowserWindow, Menu, MenuItem } = remote;

function path_join() {
    let buffer = [];
    for (let i=0; i<arguments.length; i++) {
        buffer.push(arguments[i]);
    }
    return buffer.join(path.sep);
}

const PREFIX_REQUIRE = path_join('.');
const PREFIX_LOAD = path_join('src');

module.exports = {
    loadWindow: function (location) {
        const config = require(path_join(PREFIX_REQUIRE, location, 'win.js'));
        const options = config.options;
        const bar = config.bar;

        // 强制打开nodejs模式
        if (undefined === options.webPreferences) {
            options.webPreferences = {nodeIntegration: true}
        } else {
            options.webPreferences.nodeIntegration = true
        }

        // 新建窗体
        let win = new BrowserWindow(options);
        win.loadFile(path_join(PREFIX_LOAD, location, 'index.html'));
        win.on('close', ()=>{
            win = null;
        });

        // 菜单栏
        if (undefined !== bar) {
            let menu = Menu.buildFromTemplate(bar);
            Menu.setApplicationMenu(menu);
        }
    }
};