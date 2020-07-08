// console.log(process.env);
// console.log(process.argv);
// process.exit();

const path = require('path');
const fs = require('fs');
const file_package = path.resolve(process.argv[2]);
const file_config = path.resolve(process.argv[3]);
const json_package = JSON.parse(fs.readFileSync(file_package));
const object_config = require(file_config);

// console.log(object_config);
for (let key in object_config) {
    json_package[key] = object_config[key];
}
fs.writeFileSync(file_package, JSON.stringify(json_package, undefined, '    '));