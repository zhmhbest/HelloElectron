const {app} = require('electron');

module.exports = {
    // App运行前准备
    preAppLoad() {
        console.log("Load");
    },

    // App退出前准备
    preAppQuit() {
        console.log("Quit");
    }
}