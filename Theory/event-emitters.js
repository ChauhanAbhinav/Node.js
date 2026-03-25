// An EventEmitter allows you to:
// Emit events (trigger something)
// Listen to events (respond to something)

let EventEmitter = require("events");

const emitter = new EventEmitter(); // listner

emitter.on("greet", ()=>{
    console.log('Hello User!');
})

emitter.emit("greet"); // Trigger

//Output
// Hello User!

//Data
emitter.on('message', (name, age) => {
    console.log(`Hello ${name}, Age: ${age}`);
});

emitter.emit('message', 'Abhinav', 25);

//Multiple Listner
emitter.on('event', () => console.log('Listener 1'));
emitter.on('event', () => console.log('Listener 2'));

emitter.emit('event');
// Output
// Listener 1
// Listener 2

// once() → Run only once
emitter.once('login', () => {
    console.log('User logged in');
});

emitter.emit('login');
emitter.emit('login'); // won't run again

// removeListener() / off() → Remove listener
function fn() {
    console.log('Hello');
}

emitter.on('test', fn);
emitter.off('test', fn);

removeAllListeners()
emitter.removeAllListeners('event');