const {parentPort, workerData} = require("worker_threads");

console.log("Worker Thread Started =======>")

function heavyTask() {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    return sum;
}

parentPort.postMessage(heavyTask());

console.log("Worker Thread Ended =======>")


