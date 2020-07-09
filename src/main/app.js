// 用于控制应用程序生命周期和创建本机浏览器窗口的模块
const {app, BrowserWindow, Menu} = require('electron');
const lifeCyle = require('./life');
const loadWindow = require('./lib/loadWindow');
const showDialog = require('./lib/showDialog');

// 屏蔽程序菜单（生成模式）
if (1 !== parseInt(process.env['dev'])) {
    Menu.setApplicationMenu(null);
}

// ■■■■■■■■■■■■■■■■ ■■■■■■■■■■■■■■■■ 

// Module
module.exports = () => {
    lifeCyle.preAppLoad(); // 运行前准备
    
    // 准备完成后启动 主窗体
    let mainWindow = null;
    const createWindow = () => {
        mainWindow = loadWindow('home', BrowserWindow);
    };

    // 准备完成后加载窗体
    app.whenReady().then(createWindow);

    // 确保渲染器进程在每个导航中重新启动
    app.allowRendererProcessReuse = true;

    // 关闭所有窗口后退出
    app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
    app.on('quit', lifeCyle.preAppQuit);

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    });

    lifeCyle.bind();
}