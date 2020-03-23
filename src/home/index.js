// const { remote } = require('electron');
// const { BrowserWindow } = remote;
const { loadWindow } = require('../winloader');
const Buttons = document.querySelectorAll('button');


/**
 * 新窗体
 */
Buttons[0].onclick = function (e) {
    loadWindow('render/00_NewWindow');
};


/**
 * 右键菜单
 */
Buttons[1].onclick = function (e) {
    loadWindow('render/01_RightMenu');
};


/**
 * 通过本地浏览器打开链接
 */
Buttons[2].onclick = function (e) {
    loadWindow('render/02_OpenLocalBrowser');
};


/**
 * 向父窗体传递信息
 */
Buttons[3].onclick = function (e) {
    window.open('../render/03_PostMessage/index.html');
};
window.addEventListener('message', function (msg) {
    alert(msg.data);
});


/**
 * 对话框
 */
Buttons[4].onclick = function (e) {
    loadWindow('render/04_Dialog');
};


/**
 * 剪切板
 */
Buttons[5].onclick = function (e) {
    loadWindow('render/05_Clipboard');
};

