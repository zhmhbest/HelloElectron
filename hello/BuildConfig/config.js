
module.exports = {
    main: "src/main.js",
    scripts: {
        start: "electron .",
        build: "electron-builder --win --x64",
    },
    build: {
        // 项目信息
        productName: "Hello",
        appId: "com.example.hello",
    
        // 输出文件夹
        directories: {
            "output": "dist"
        },
    
        // 不同平台输出方式
        win: {
            icon: "src/logo.ico",
            target: ["nsis", "zip"],
        },
        // MSI安装文件详细配置
        nsis: {
            oneClick: false,                                // 一键安装
            allowElevation: true,                           // 为false则须以管理员身份运行
            allowToChangeInstallationDirectory: true,       // 允许修改安装目录
            createDesktopShortcut: true,                    // 创建桌面图标
            createStartMenuShortcut: true,                  // 创建开始菜单图标
            //installerIcon: "./build/icons/aaa.ico",       // 安装图标
            //uninstallerIcon: "./build/icons/bbb.ico",     // 卸载图标
            //installerHeaderIcon: "./build/icons/aaa.ico", // 安装时头部图标
            //shortcutName: "xxxx",                         // 图标名称
            //include: "build/script/installer.nsh",        // 包含的自定义nsis脚本
        }
        /*
        mac: {
            icon: "src/logo.ico",
            target: ["dmg", "7z"]
        },
        linux: {
            icon: "src/logo.ico",
            target: ["deb", "rpm", "tar.bz2"]
        },
        */
    },
};