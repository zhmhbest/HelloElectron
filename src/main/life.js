const {app, shell} = require('electron');
const localServer = require('./lib/localServer');

module.exports = {
    // App运行前准备
    preAppLoad() {
        console.log("Load");
        if ( !localServer.checkPythonVersion() ) {
            console.log("Unexpect Python Version!");
            shell.openExternal("https://www.python.org/downloads/release/python-368/");
            app.quit();
        }

        if ( !localServer.checkFlaskVersion() ) {
            localServer.installFlask()
        }

        localServer.runServer()
    },

    // App退出前准备
    preAppQuit() {
        console.log("Quit");
        localServer.exitServer()
    },

    // 绑定其他生命事件
    bind() {
        // app.on('...', function () {});
    }
};