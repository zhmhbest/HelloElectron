module.exports = {
    options: {
        height: 800,
        width: 600,
    },
    others: function(win) {
        // 打开时启动调试器
        win.webContents.openDevTools();
    }
};