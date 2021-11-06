/*
Steps:

- Build Backend Server
- Run Frontend Server

*/

const spawn = require('child_process').spawn;


function installBackendApp() {
    const backendProcess = spawn('npm.cmd', ['run', 'install']);
    printData(backendProcess, "BackendApp");
    backendProcess.on('close', function (code) {
        console.log('Backend App Installment Finished, Status = ' + code);
    });
}

function installFrontendApp() {
    const frontendProcess = spawn('npm.cmd', ['run', 'install']);
    printData(frontendProcess, "FrontendApp");
    frontendProcess.on('close', function (code) {
        console.log('Frontend App Installment Finished, Status = ' + code);
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


console.log("Installing Dependencies:  COVID Result App");
console.log("===================");
process.chdir('backend');
installBackendApp();
process.chdir("../frontend");
installFrontendApp();