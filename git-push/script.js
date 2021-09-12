const execSync = require('child_process').execSync;
const mssg = 'BUILD - ' + process.argv[2];
execSync(' git add . && git commit -m "update" && git push', { stdio:[0, 1, 2] });