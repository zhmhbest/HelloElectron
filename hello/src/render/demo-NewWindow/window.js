module.exports = {
    options: {
        height: 800,
        width: 600,
    },
    on: function(win) {
        win.on('focus', () => {
            alert('别动我！');
        });
    }
};