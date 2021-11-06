/*
Steps:

- Build Backend Server
- Run Frontend Server

*/

const spawn = require('child_process').spawn;

function updateFromGit() {
    spawn('git', ['checkout' , '.']);
    spawn('git', ['checkout' , 'master']);
    const gitPullProcess = spawn('git', ['pull']);
    printData(gitPullProcess, "Update Code");
    gitPullProcess.on('close', function (code) {
        console.log('Update Code Finished, Status = ' + code);
    });
}

function printData(process, processName) {
    process.stdout.setEncoding('utf8');
    process.stdout.on('data', function (data) {
        const str = data.toString()
        const lines = [`=================${processName}=================`, str.split(/(\r?\n)/g), `=================${processName}=================`];
        console.log(lines.join(""));
    });
}


console.log("Updating Code: COVID Result App");
console.log("===================");
updateFromGit();