const { remote } = require('electron');

const __getFilters = function(filters) {
    if (typeof filters === 'string' && filters.length > 0) {
        filters = filters.toLowerCase();
        if ('video'===filters) {
            return [{ name: 'Videos', extensions: ['mkv', 'avi', 'ogg', 'mp4', 'webm'] }]
        } else if ('image'===filters) {
            return [{ name: 'Images', extensions: ['jpg', 'jpeg', 'bmp', 'png', 'gif', 'webp'] }]
        } else if ('excel'===filters) {
            return [{ name: 'Excel', extensions: ['csv', 'xls', 'xlsx'] }]
        } else {
            return [{ name: filters, extensions: [filters] }];
        }
    } else if (filters instanceof Array) {
        return filters;
    }
    // Default
    return [{ name: 'All Files', extensions: ['*'] }]
}

module.exports = {
    /**
     * 打开一个文件
     */
    openFile: function(title, filters, dialog) {
        title = title || "打开文件";
        dialog = dialog || remote.dialog;
        
        return dialog.showOpenDialog({
            title: title,
            properties: ['openFile'],
            filters: __getFilters(filters)
        });
    },

    /**
     * 打开多个文件
     */
    openFiles: function(title, filters, dialog) {
        title = title || "打开文件们";
        dialog = dialog || remote.dialog;

        return dialog.showOpenDialog({
            title: title,
            properties: ['openFile', 'multiSelections'],
            filters: __getFilters(filters)
        });
    },

    /**
     * 打开目录
     */
    openDirectory: function(title, dialog) {
        title = title || "打开目录";
        dialog = dialog || remote.dialog;

        return dialog.showOpenDialog({
            title: title,
            properties: ['openDirectory'],
        });
    },

    /**
     * 保存文件
     */
    saveFile: function(title, dialog) {
        title = title || "保存文件";
        dialog = dialog || remote.dialog;

        return dialog.showSaveDialog({
            title: title,
            properties: ['createDirectory'],
        });
    }
}
