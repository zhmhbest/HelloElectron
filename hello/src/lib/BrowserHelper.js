const { shell, clipboard, remote } = require('electron');
const { BrowserWindow, Menu, MenuItem, dialog } = remote;
const path = require('path');
const PATH_RENDER = path.join(__dirname, '..', 'render');

const __module__ = {
    dialog: {
        getFilters: function(filters) {
            if (typeof filters === 'string' && filters.length > 0) {
                filters = filters.toLowerCase();
                if ('video'===filters) {
                    return [{ name: 'Videos', extensions: ['mkv', 'avi', 'ogg', 'mp4', 'webm'] }]
                } else if ('image'===filters) {
                    return [{ name: 'Images', extensions: ['jpg', 'jpeg', 'bmp', 'png', 'gif', 'webp'] }]
                } else if ('excel'===filters) {
                    return [{ name: 'Excel', extensions: ['csv', 'xls', 'xlsx'] }]
                } else {
                    return [{ name: filters, extensions: [filters] }];
                }
            } else if (filters instanceof Array) {
                return filters;
            }
            // Default
            return [{ name: 'All Files', extensions: ['*'] }]
        },

        /**
         * 打开一个文件
         */
        openFile: function(title, filters) {
            title = title || "打开文件";
            return dialog.showOpenDialog({
                title: title,
                properties: ['openFile'],
                filters: __module__.dialog.getFilters(filters)
            });
        },

        /**
         * 打开多个文件
         */
        openFiles: function(title, filters) {
            title = title || "打开文件们";
            return dialog.showOpenDialog({
                title: title,
                properties: ['openFile', 'multiSelections'],
                filters: __module__.dialog.getFilters(filters)
            });
        },

        /**
         * 打开目录
         */
        openDirectory: function(title) {
            title = title || "打开目录";
            return dialog.showOpenDialog({
                title: title,
                properties: ['openDirectory'],
            });
        },

        /**
         * 保存文件
         */
        saveFile: function(title) {
            title = title || "保存文件";
            return dialog.showSaveDialog({
                title: title,
                properties: ['createDirectory'],
            });
        },
    },

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
    },

    /**
     * 设置标题栏下方菜单
     * @param {Array} menu_arr 
     */
    setMenuBar: function(menu_arr) {
        /*
            let menu = [
                {
                    label: '标签名称',
                    submenu: [
                        {label: '子标签名称1', click: ()=>{ alert('事件1') }, accelerator: 'ctrl+1'},
                        {label: '子标签名称2', click: ()=>{ alert('事件2') }, accelerator: 'ctrl+2'},
                    ]
                },
                // ...
            ] 
        */
        if (undefined === menu_arr) {
            Menu.setApplicationMenu(null);  // 屏蔽程序菜单
        } else {
            Menu.setApplicationMenu(Menu.buildFromTemplate(menu_arr));
        }
    },

    /**
     * 设置右键菜单
     * @param {Array} menu_arr 
     */
    setMenuRight: function(menu_arr) {
        let menu_obj = Menu.buildFromTemplate(menu_arr);
        window.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            menu_obj.popup();
        });
    },

    /**
     * 打开子窗体
     */
    subWindow: function(location) {
        const sub_path = path.resolve(path.join(PATH_RENDER, location));
        window.open(path.join(sub_path, 'index.html'));
    },

    /**
     * 打开通信窗体
     */
    postWindow: function(location, channel, callback) {
        const sub_path = path.resolve(path.join(PATH_RENDER, location));
        window.addEventListener(channel, callback);
        window.open(path.join(sub_path, 'index.html'));
    },

    /**
     * 加载窗体
     * @param {String} location 
     */
    loadWinow: function(location) {
        /*
            module.exports = {
                options: {
                    height: 800,
                    width: 600,
                },
                on: function(win) {
                    win.on('focus', () => {
                        alert('focus');
                    });
                }
            };
         */
        const render_path = path.join(PATH_RENDER, location);
        const render_window_config = require(
            path.relative(__dirname, path.join(render_path, 'window.js'))
        );

        // 强制打开nodejs模式
        (()=>{
            const options = render_window_config.options;
            if (undefined === options.webPreferences) {
                options.webPreferences = {nodeIntegration: true};
            } else {
                options.webPreferences.nodeIntegration = true;
            }
        })();

        // 新建窗体
        (()=>{
            let win = new BrowserWindow(render_window_config.options);
            // 关闭事件
            win.on('close', ()=>{
                win = null;
            });
            // 绑定自定义事件
            if (undefined !== render_window_config.on) {
                render_window_config.on(win);
            }
            // 加载页面
            win.loadFile(
                path.join(render_path, 'index.html')
            );
        })();
    }
};

module.exports = __module__;