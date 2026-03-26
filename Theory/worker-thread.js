// Worker Threads in Node.js allow you to run JavaScript code in parallel threads, instead of blocking the main thread.

// Main thread = handles requests
// Worker thread = does heavy computation

const { Worker } = require("worker_threads");

const worker = new Worker("./Worker.js", { workerData: { num: 40 } });

worker.on("message", (result)=>{
    console.log(`The result from worker is: ${result}`);
})

worker.on('error', (err) => console.error(err));


// Make main thread busy
// worker callback goes to event loop queue
// And event loop can only run when Call stack is empty

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
