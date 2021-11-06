/*
Steps:

- Build Backend Server
- Run Frontend Server

*/

const spawn = require('child_process').spawn;


function buildBackendApp() {
    const backendProcess = spawn('npm.cmd', ['run' , 'build']);
    printData(backendProcess, "BackendApp");
    backendProcess.on('close', function (code) {
        console.log('Backend App Build Finished, Status = ' + code);
    });
}

function gitPull() {
    const frontendProcess = spawn('npm.cmd', ['run' , 'build']);
    printData(frontendProcess, "FrontendServer");
    frontendProcess.on('close', function (code) {
        console.log('Frontend App Build Finished, Status = ' + code);
    });
}


console.log("Building COVID Result App");
console.log("===================");
process.chdir('Backend');
buildBackendApp();
process.chdir("../frontend");
buildFrontendApp();