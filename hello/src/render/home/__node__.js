const addButton = (() => {
    const ul = document.querySelector('#test_events');
    return () => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        li.appendChild(btn);
        ul.appendChild(li);
        return btn;
    }
})();
let btn = null;
//
const BrowserHelper = require('../lib/renderHelper');
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "设置菜单"
btn.onclick = function (e) {
    BrowserHelper.menu.setMenuBar([
        {
            label: '标签名称',
            submenu: [
                {label: '子标签名称1', click: ()=>{ alert('事件1') }, accelerator: 'ctrl+1'},
                {label: '子标签名称2', click: ()=>{ alert('事件2') }, accelerator: 'ctrl+2'},
            ]
        },
        // ...
    ]);
};
btn = addButton();
btn.innerText = "取消菜单"
btn.onclick = function (e) {
    BrowserHelper.menu.setMenuBar();
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "右键菜单"
btn.onclick = function (e) {
    BrowserHelper.loadWindow("demo-RightMenu");
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "新窗体"
btn.onclick = function (e) {
    BrowserHelper.loadWindow("demo-NewWindow");
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "通过本地浏览器打开链接"
btn.onclick = function (e) {
    BrowserHelper.loadWindow("demo-OpenLocalBrowser");
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "剪切板"
btn.onclick = function (e) {
    BrowserHelper.loadWindow("demo-Clipboard");
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "对话框"
btn.onclick = function (e) {
    BrowserHelper.loadWindow("demo-Dialog");
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "向父窗体传递信息"
btn.onclick = function (e) {
    BrowserHelper.post.postWindow("demo-PostMessage", 'message', (msg) => {
        alert(msg.data);
    });
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■
