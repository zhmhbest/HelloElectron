const { remote } = require('electron');
const { Menu } = remote;

module.exports = {
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
    }
};