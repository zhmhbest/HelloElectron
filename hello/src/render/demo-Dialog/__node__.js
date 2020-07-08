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
const BrowserHelper = require('../../lib/BrowserHelper');
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "打开单个文件"
btn.onclick = function (e) {
    BrowserHelper.dialog.openFile("标题").then((f)=>{
        alert(f.filePaths);
    });
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "打开多个文件"
btn.onclick = function (e) {
    BrowserHelper.dialog.openFiles("标题").then((f)=>{
        alert(f.filePaths);
    });
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "打开目录"
btn.onclick = function (e) {
    BrowserHelper.dialog.openDirectory("标题").then((f)=>{
        alert(f.filePaths);
    });
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■


btn = addButton();
btn.innerText = "保存文件"
btn.onclick = function (e) {
    BrowserHelper.dialog.saveFile("标题").then((f)=>{
        alert(f.filePath);
    });
};
// ■■■■■■■■ ■■■■■■■■ ■■■■■■■■ ■■■■■■■■
