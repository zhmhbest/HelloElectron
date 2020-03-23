# electron-quick-start

## 安装

```bash
# %AppData%\npm-cache
git clone https://github.com/electron/electron-quick-start
cd ./electron-quick-start
npm config set home https://npm.taobao.org
npm config set registry https://registry.npm.taobao.org/
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
npm install
```

#### UnhandledPromiseRejectionWarning

```bash
# UnhandledPromiseRejectionWarning: HTTPError: Response code 404 (Not Found)
#   for https://npm.taobao.org/mirrors/electron/v*/electron-*.zip
mkdir -p ./mirrors/electron/
# v*
#   electron-*.zip
#   SHASUMS256.txt
npm config set ELECTRON_MIRROR http://127.0.0.1/mirrors/electron/
npm install
npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
```

## 启动

```bash
# npx electron .
npm start
```