const path = require('path');
const fs = require('fs');
const http = require('http');
const child_process = require('child_process');

// SERVER
const SERVER_LOCAL = (() => {
    if (1 === parseInt(process.env['dev'])) {
        return path.resolve(path.join(__dirname, '..', 'local'));
    } else {
        return path.join(process.resourcesPath, 'app.asar.unpacked', 'src/main/local');
    }
})();
console.log('Server location:', SERVER_LOCAL);
const SERVER_INDEX = path.join(SERVER_LOCAL, 'index.py');
const SERVER_CONFIG = JSON.parse(fs.readFileSync(
    path.join(SERVER_LOCAL, 'config.json')
));

// PYTHON
const PYTHON_HOME = SERVER_CONFIG['python'];
console.log('PYTHON_HOME :', PYTHON_HOME);
const PYTHON_VERSION = '3.6.8';
const FLASK_VERSION = '1.0.4';
const EXE_PYTHON = path.join(PYTHON_HOME, 'python.exe');
const EXE_PIP = path.join(PYTHON_HOME, 'pip.exe');


module.exports = {
    checkPythonVersion: function () {
        const out = child_process.execFileSync(EXE_PYTHON, ['--version']).toString();
        const ver = out.match(/(?<=Python\s)\d+\.\d+\.\d+/).toString();
        // console.log('['+ver+']');
        return PYTHON_VERSION === ver;
    },
    checkFlaskVersion: function () {
        const out = child_process.execFileSync(EXE_PIP, ['show', 'flask']).toString();
        const ver = out.match(/(?<=Version:\s)\d+\.\d+\.\d+/).toString();
        // console.log('['+ver+']');
        return FLASK_VERSION === ver;
    },
    installFlask: function () {
        const out =  child_process.execFileSync(EXE_PIP,
            ['install', '-i', 'https://pypi.tuna.tsinghua.edu.cn/simple', 'some-package', 'flask=='+FLASK_VERSION]
        ).toString();
        console.log(out);
    },
    runServer: function () {
        console.log('Run', 'http://' + SERVER_CONFIG['host'] + ':' + SERVER_CONFIG['port']);
        child_process.execFile(EXE_PYTHON, [SERVER_INDEX],
            (error, stdout, stderr) => {
            console.log(stdout);
            console.error(stderr);
        });
    },
    exitServer: function () {
        console.log('Quit', 'http://' + SERVER_CONFIG['host'] + ':' + SERVER_CONFIG['port']);
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
    }
};