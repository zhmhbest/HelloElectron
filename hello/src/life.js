const {app, BrowserWindow} = require('electron');

// App运行前准备
function on_appPreLoad() {
    console.log("on_appPreLoad");
}

// App退出前准备
function on_appPreQuit() {
    console.log("on_appPreQuit");
}

// Module
module.exports = (mainWindow) => {
    on_appPreLoad(); // 运行前准备

    app.allowRendererProcessReuse = true;

    // 准备完成后启动 主窗体
    app.whenReady().then(mainWindow);

    // 关闭所有窗口后退出
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            on_appPreQuit(); //退出前准备
            app.quit();
        }
    });

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            mainWindow()
        }
    });
}