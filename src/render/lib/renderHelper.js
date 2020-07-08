const { shell, clipboard, remote } = require('electron');
const { BrowserWindow } = remote;

module.exports = {
    // 设置菜单
    menu: require('./menu'),
    // 通信子窗体
    post: require('./post'),
    // 文件对话框
    dialog: require('../../main/lib/showDialog'),
    // 加载窗体
    loadWindow: (() => {
        const loadWindow = require('../../main/lib/loadWindow');
        return function(location) { 
            loadWindow(location, BrowserWindow); 
        };
    })(),
    
    /**
     * 设置剪切板内容
     * @param {String} text 
     */
    setClipboardText: function(text) {
        clipboard.writeText(text);
    },

    /**
     * 打开外部程序
     * @param {String} location: 本地地址或URL 
     */
    openExternal: function(location, options) {
        shell.openExternal(location, options);
    }
};
