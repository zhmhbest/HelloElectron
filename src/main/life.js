const {app, shell} = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');
const child_process = require('child_process');


const SERVER_LOCAL = (() => {
    const dev = process.env['dev'];
    if (1 == dev) {
        return path.join(__dirname, 'local');
    } else {
        return path.join(process.resourcesPath, 'app.asar.unpacked', 'src/main/local');
    }
})();
console.log('Server location:', SERVER_LOCAL);
const SERVER_INDEX = path.join(SERVER_LOCAL, 'index.py');
const SERVER_CONFIG = JSON.parse(fs.readFileSync(path.join(SERVER_LOCAL, 'config.json')));


const PYTHON_HOME = SERVER_CONFIG.python;
console.log('PYTHON_HOME :', PYTHON_HOME);
const PYTHON_VERSION = 'Python 3.6.8';
const FLASK_VERSION = '1.0.4';
const EXE_PYTHON = path.join(PYTHON_HOME, 'python.exe');
const EXE_PIP = path.join(PYTHON_HOME, 'pip.exe');


module.exports = {
    // App运行前准备
    preAppLoad() {
        console.log("Load");        
        // Check Python Version
        child_process.execFile(EXE_PYTHON, ['--version'], (error, stdout, stderr) => {
            // console.log(stdout);
            if (PYTHON_VERSION !== stdout.trim()) {
                console.log("Unexpet Python Version!");
                shell.openExternal("https://www.python.org/downloads/release/python-368/");
                app.quit();
            }
        });

        // Check Flask Version
        child_process.execFile(EXE_PIP, ['show', 'flask'], (error, stdout, stderr) => {
            let checkout = false;
            if (null == error) {
                // pip 已安装
                for (let line of stdout.split("\n")) {
                    // console.log(stdout);
                    if ('Version:' === line.substr(0, 8)) {
                        checkout = (FLASK_VERSION === line.substr(8).trim());
                        break;
                    }
                }
            } else {
                console.log("pip.exe not found!");
                app.quit();
            }
            // 安装flask
            if (!checkout) {
                console.log("Install Flask...");
                child_process.execFile(
                    EXE_PIP, 
                    ['install', '-i', 'https://pypi.tuna.tsinghua.edu.cn/simple', 'some-package', 'flask=='+FLASK_VERSION],
                    (error, stdout, stderr) => {
                        console.log(stdout);
                    }
                );
            }
        });

        // Run local server
        child_process.execFile(EXE_PYTHON, [SERVER_INDEX], (error, stdout, stderr) => {
            console.log(stdout);
            console.error(stderr);
        });
    },

    // App退出前准备
    preAppQuit() {
        console.log("Quit");
        const req = http.request({
            method: 'GET',
            host: SERVER_CONFIG.host,
            port: SERVER_CONFIG.port,
            path: '/exit'
        }, res => {
            console.log(res);
        });
        // req.setHeader
        // req.write
        req.end();
    },

    // 绑定其他生命事件
    bind() {
        // app.on('...', function () {});
    }
}