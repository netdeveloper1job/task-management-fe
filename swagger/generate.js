//Allow invalid certificate
process.env["NODE_TLS_REJECT _UNAUTHORIZED"] = 0;

let shell = require('shelljs');
const fs = require('fs');

let webConfigString = fs.readFileSync('src/assets/web.config.json');
let config = JSON.parse(webConfigString);

let cmd = 'ng-openapi-gen --input ';
cmd += config.API_URL + '/api-json --output ' + config.SWAGGER_PATH;
shell.exec(cmd);

process.env["NODE_TLS_REJECT _UNAUTHORIZED"] = 1;
