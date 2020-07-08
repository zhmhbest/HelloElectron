// 用于控制应用程序生命周期和创建本机浏览器窗口的模块
const {app, BrowserWindow, Menu} = require('electron');
const mainWindow = require('./main/window.js'); // 主窗体
const lifeCycle = require('./life.js');

Menu.setApplicationMenu(null);  // 屏蔽程序菜单
lifeCycle(mainWindow);          // 程序生命周期
