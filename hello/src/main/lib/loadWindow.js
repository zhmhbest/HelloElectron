// const {BrowserWindow} = require('electron');
const path = require('path');
const PATH_RENDER = path.resolve(path.join(__dirname, '..', '..', 'render'));


// const loadWindow = require('./loadWindow');
module.exports = function(location, BrowserWindow) {
    const workspace = path.join(PATH_RENDER, location);
    const window_config = require(
        path.join(path.relative(__dirname, workspace), 'window.js')
    );
    /*
        module.exports = {
            options: {
                height: 800,
                width: 600,
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
    */
    

    // 配置修正
    (()=>{
        const options = window_config.options;

        // 强制打开nodejs模式
        if (undefined === options.webPreferences) {
            options.webPreferences = {nodeIntegration: true};
        } else {
            options.webPreferences.nodeIntegration = true;
        }

        // 转换preload为绝对路径
        if (undefined !== options.webPreferences.preload) {
            options.webPreferences.preload = path.resolve(
                path.join(workspace, options.webPreferences.preload)
            );
        }
    })();


    // 新建窗体
    let win = new BrowserWindow(window_config.options);

    // 关闭事件
    win.on('close', ()=>{
        win = null;
    });

    // 其它自定义操作（事件和调试）
    if (undefined !== window_config.others) {
        window_config.others(win);
    }

    // 加载页面
    win.loadFile(
        path.join(workspace, 'index.html')
    );

    return win;
}