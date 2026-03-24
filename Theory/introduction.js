// Node.js Introduction
// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine
// It allows you to run JavaScript outside the browser (on servers, CLI tools, etc.)

/**
 * WHAT IS NODE.JS?
 * - A JavaScript runtime environment
 * - Built on V8 (Google's JavaScript engine)
 * - Event-driven, non-blocking I/O model
 * - Single-threaded but highly scalable
 */

/**
 * WHAT IS IT USED FOR?
 * - Backend/Server-side development
 * - REST APIs and web services
 * - Real-time applications (chat, notifications)
 * - Command-line tools (CLI)
 * - Microservices
 * - IoT applications
 * - Streaming applications
 */

// DO NOT USE NODE.JS FOR?
// CPU-intensive tasks, as it can block the event loop and degrade performance.
// Instead, use it for I/O-bound tasks where it excels.
// Examples of CPU-intensive tasks include heavy computations, data processing, and image/video processing.


/**
 * KEY FEATURES
 * 1. Non-blocking I/O (Asynchronous) - doesn't wait for operations, continues executing
 *    
 * 2. Event-driven - uses event emitters and listeners
 * 3. Single-threaded - uses a single thread for handling requests with the event loop, but can handle many concurrent connections
 * 4. NPM (Node Package Manager) - vast ecosystem of packages
 * 5. Single language - JavaScript for frontend and backend
 * 6. Scalable - handles multiple concurrent connections efficiently
 */

// V8 Engine: Google's open-source JavaScript engine, used in Chrome and Node.js
// It compiles JavaScript to machine code for fast execution
// V8 is written in C++ and provides a runtime for executing JavaScript code

// JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it
// to machine code for better performance. This process is called Just-In-Time (JIT) compilation. So, while JavaScript started as an interpreted language, it has evolved to include compilation techniques for improved performance.

