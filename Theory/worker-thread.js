// Worker Threads in Node.js allow you to run JavaScript code in parallel threads, instead of blocking the main thread.

// Main thread = handles requests
// Worker thread = does heavy computation

const { Worker } = require("worker_threads");

const worker = new Worker("./Worker.js", { workerData: { num: 40 } });

worker.on("message", (result)=>{
    console.log(`The result from worker is: ${result}`);
})

worker.on('error', (err) => console.error(err));
// Check worker.js code


// if used same file for main and worker thread, then we can check if we are in main thread or worker thread using isMainThread property
const { Worker, isMainThread, parentPort } = require("worker_threads");
if (isMainThread) {
    // 1. This code runs in the main thread
    const worker = new Worker("./Worker.js", { workerData: { num: 40 } });

    worker.on("message", (result) => {
        console.log(`The result from worker is: ${result}`);
    })
    worker.on('error', (err) => console.error(err));
} else {
    // 2. This code runs inside the Worker Thread
  parentPort.on('message', (msg) => {
    parentPort.postMessage('Task Complete');
  });
}


// Make main thread busy
// worker callback goes to event loop queue
// And event loop can only run when Call stack is empty
// When Main thread is free (The Main Thread finally checks its queue and sees the message the worker sent ages ago).

console.log("Main Thread Started")

    for (let i = 0; i < 1000000; i++) {
        console.log(i)
    }

console.log("Main Thread Ended")


// Output: 
// //Main Thread Ended
// Worker Thread Started =======>
// Worker Thread Ended =======>
// The result from worker is: 499999999067109000


// Note: 
// If your goal was to use Worker Threads to keep your app responsive,
// blocking the main thread with a loop defeats the purpose.
// The main thread should ideally act like a Manager.
