
# HelloElectron

A demo of electron.

## 相关资料

- [Electron文档](https://www.electronjs.org/docs/api)
- [Electron下载](https://npm.taobao.org/mirrors/electron/)

## Hello

### 安装

```bash
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
# git init
npm init -f
echo node_modules>.gitignore
echo build>>.gitignore

npm -D i electron
npm -D i electron-packager
```

### package.json

```json
...
  "main": "src/main.js",
  "scripts": {
    "start": "electron .",
    "build--w64": "mkdir build & cd build & electron-packager .. --platform=win32 --arch=x64 --overwrite",
    "build--all": "mkdir build & cd build & electron-packager .. --platform=all --arch=all --overwrite"
  },
...
```

### 启动

```bash
npm run start
```

### 打包

```bash
npm run build--w64
```