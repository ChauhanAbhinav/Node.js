// 1. What is output of the following code and why?
// console.log("Question 1:");
console.log("A (Question 1)");

process.nextTick(() => console.log("B (Question 1)"));

Promise.resolve().then(() => console.log("C (Question 1)"));

console.log("D (Question 1)");

// 2. What is output and why?
// console.log("\nQuestion 2:");
Promise.resolve().then(() => {
  console.log("A (Question 2)");
  process.nextTick(() => console.log("B (Question 2)"));
});

process.nextTick(() => console.log("C (Question 2)"));

// 2. What is output of the following code and why?
// console.log("\nQuestion 3:");
setTimeout(() => console.log("timeout (Question 3)"), 0);
setImmediate(() => console.log("immediate (Question 3)"));

// 4. What is output of the following code and why?
// console.log("\nQuestion 4:");
setTimeout(() => console.log("timeout (Question 4)"), 1000);
setImmediate(() => console.log("immediate (Question 4)"));

// 5. What is output of the following code and why?
// console.log("\nQuestion 5:");
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => console.log("timeout (Question 5)"), 0);
  setImmediate(() => console.log("immediate (Question 5)"));
});

// 6. What is output of the following code and why?
// console.log("\nQuestion 6:");
fs.readFile(__filename, () => {
  console.log("A (Question 6)");

  process.nextTick(() => console.log("B (Question 6)"));
  Promise.resolve().then(() => console.log("C (Question 6)"));
  setTimeout(() => console.log("timeout (Question 6)"), 0);
  setImmediate(() => console.log("immediate (Question 6)"));

  console.log("D (Question 6)");
});

// 7. What is output of the following code and why?
// console.log("\nQuestion 7:");
function loop() {
//   process.nextTick(loop);
}
loop();

setTimeout(() => console.log("timeout"), 0);

// 8. What is output of the following code and why?
// console.log("\nQuestion 8:");
Promise.resolve()
.then(() => {
    console.log("A (Question 8)");
    process.nextTick(() => console.log("B (Question 8)"));
})
.then(() => console.log("C (Question 8)"));

// 9. What is output of the following code and why?
// console.log("\nQuestion 9:");
const fs = require('fs');

fs.readFile(__filename, () => {
  console.log("file read (Question 9)");
});

while (true) {}

// 10. What is output of the following code and why?
// console.log("\nQuestion 10:");
async function test() {
  console.log("A (Question 10)");
  await Promise.resolve().then(() => console.log("B (Question 10)"));
  console.log("C (Question 10)");
}

test();
console.log("D (Question 10)");

// 11. What is output of the following code and why?
// console.log("\nQuestion 11:");
function test() {
  console.log("A (Question 11)");
  Promise.resolve().then(() => console.log("B (Question 11)"));
  console.log("C (Question 11)");
}

test();
console.log("D (Question 11)");