const {BrowserWindow} = require('electron');
const path = require('path');


module.exports = () => {
    const win = new BrowserWindow({
        width:  800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    // 加载HTML页面
    win.loadFile(path.join(__dirname, 'static', 'index.html'));

    // 打开时启动调试器
    win.webContents.openDevTools();

    // 主进程 渲染进程 通信
    ((send) => {
        /*
            // 主进程使用send发送消息
            send(channel, ...args)
         */
        /*
            // 渲染进程使用以下方法接受消息
            const {ipcRenderer} = require('electron');
            ipcRenderer.on(channel, (e, args) => {
                console.log(args);
            });
         */
    })(win.webContents.send);
}
