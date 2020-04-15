const FILENAME = 'package.json';
let fs = require('fs');
let pj = JSON.parse(fs.readFileSync(FILENAME));
pj['main'] = 'src/main.js';
pj['build'] = {
    "appId": "com.example.hello",
    "mac": {
      "target": ["dmg","zip"]
    },
    "win": {
      "target": ["nsis","zip"]
    }
};
pj['scripts'] = {
    start: "electron .",
    build: "electron-builder --win --x64"
};
fs.writeFileSync(FILENAME, JSON.stringify(pj, undefined, '    '));