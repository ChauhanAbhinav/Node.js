// A Promise in JavaScript is an object that represents the eventual result of an asynchronous operation.
// Promises run in Microtask Queue, which has higher priority than timers.
// 3 States of a Promise
// Pending → Initial state (still working)
// Fulfilled (Resolved) → Operation successful
// Rejected → Operation failed

const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }
});

promise
  .then((result) => {
      console.log(result); // success
  })
  .catch((error) => {
      console.log(error); // failure
  })
  .finally(() => {
      console.log("Done!");
  });

//Callback hell
doA(() => {
  doB(() => {
    doC(() => {
      // messy 😵
    });
  });
});

// Promise Chaining
Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num * 3)
  .then(result => console.log(result)); // 30