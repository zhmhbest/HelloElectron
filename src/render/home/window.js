module.exports = {
    options: {
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: 'preload.js'
        }
    },
    others: function(win) {
        // 打开时启动调试器
        win.webContents.openDevTools();
    }
};