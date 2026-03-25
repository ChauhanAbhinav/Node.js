// If we run the node command without any script to execute or without any arguments, we start a REPL session:

// node

// Note: REPL stands for Read Evaluate Print Loop, and it is a programming language environment
// (basically a console window) that takes single expression as user input and returns the result back to the console after execution.
// The REPL session provides a convenient way to quickly test simple JavaScript code.

console.log('test')
// Output:
test
undefined

a=10
// Output:
10

a+5
// Output:
15

function add(x, y) {
    return x + y;
}
// Output:
undefined

add(3, 4)
// Output:
7

// To exit the REPL session, you can use the .exit command or press Ctrl + C twice.