/*
Steps:

- Run Backend Server
- Run Frontend Server
- Open Browser

*/

const spawn = require('child_process').spawn;


function runBackendServer() {
    const backendProcess = spawn('node', ['dist/main']);
    printData(backendProcess, "BackendServer");
    backendProcess.on('close', function (code) {
        console.log('Backend Server Closed ' + code);
    });
}

function runFrontendServer() {
    const frontendProcess = spawn('npm.cmd', ['run' , 'start'] , {cwd : process.cwd()});
    printData(frontendProcess, "FrontendServer");
    frontendProcess.on('close', function (code) {
        console.log('Frontend Server Closed ' + code);
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


console.log("Booting COVID Result App");
console.log("===================");
process.chdir('../backend');
runBackendServer();
process.chdir("../frontend");
runFrontendServer();