@IF NOT EXIST package.json @(
    npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/
    npm init -f
    npm -D i electron
    npm -D i electron-builder
    node "BuildConfig/attach.js" "package.json" "BuildConfig/config.js"
)
