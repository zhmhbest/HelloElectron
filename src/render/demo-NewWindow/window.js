module.exports = {
    options: {
        height: 800,
        width: 600,
    },
    others: function(win) {
        win.on('focus', () => {
            alert('别动我！');
        });
    }
};