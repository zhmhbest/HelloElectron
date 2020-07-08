// DEBUG
(() => {
    const path = require('path');
    let s = path.dirname(process.argv[0]);
    // len("node_modules/electron/dist") = 26
    // console.log("node_modules/electron/dist".length);
    process.env['dev'] = ('node_modules' === s.substr(-26, 12)) ? 1 : 0;
})();

require('./main/app')();