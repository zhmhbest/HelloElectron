# HelloElectron

A hello demo of electron.

## Command

```batch
REM 初始化
Initialize.bat

REM 运行
npm run start

REM 打包
npm run build
```

## Source

- src
  - assets
  - main
    - lib
    - local
    - app.js
    - life.js
  - render
    - lib
    - home
    - ...other renders
  - index.js

## 其它相关项目

### [electron-vue](https://github.com/SimulatedGREG/electron-vue)

- [github](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html)

```bash
npm -g i yarn
npm -g i vue-cli
vue init simulatedgreg/electron-vue hello-ev
```

```txt
? Application Name hello-ev
? Application Id com.example.yourapp
? Application Version 0.0.1
? Project description An electron-vue project
? Use Sass / Scss? No
? Select which Vue plugins to install (Press <space> to select, <a> to toggle all, <i> to invert selection)axios, vue-electron, vue-router, vuex, vuex-electron
? Use linting with ESLint? No
? Set up unit testing with Karma + Mocha? No
? Set up end-to-end testing with Spectron + Mocha? No
? What build tool would you like to use? builder
```

```bash
yarn install
```
