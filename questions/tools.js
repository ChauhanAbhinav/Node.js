// 1. Recursive File Analyzer CLI
// Build a CLI tool like tree:

// Input: directory path
// Output:
// Total files
// Total folders
// Largest file
// Print structure like tree

// Concepts:

// fs, path
// recursion
// sync vs async

// 2. Log Monitor (Real-time)

// Like tail -f in Linux

// Watch a log file
// Print new lines as they are added
// Highlight errors (e.g., lines containing "ERROR")

// Concepts:

// streams (fs.createReadStream)
// file watching (fs.watch)
// event-driven programming

// 3. Basic HTTP Server WITHOUT Express

// Build your own mini server:

// Routing (/, /users, /products)
// Return JSON / HTML
// Handle query params

// Concepts:

// http module
// request/response lifecycle

// 4. ⏱ Task Scheduler (Mini Cron)

// Create a scheduler:

// Run tasks at intervals
// Example:
// Run every 5 sec
// Run after delay

// Concepts:

// timers (setTimeout, setInterval)
// job queues
// async execution
// ⚡ Intermediate → Advanced Apps

// 5. TCP Chat Server

// Multi-user chat using raw TCP:

// Multiple clients connect
// Broadcast messages
// Show user join/leave

// Concepts:

// net module
// sockets
// event emitter
// connection handling

// 6. Event-Driven Notification System

// Build like a mini pub-sub:

// Services emit events
// Subscribers listen

// Example:

// User signup → send email + log + analytics

// Concepts:

// EventEmitter
// decoupled architecture

// 7. File Upload Service (Streaming)

// Upload large files efficiently:

// Stream upload to disk
// Show progress
// Avoid memory overload

// Concepts:

// streams
// backpressure
// pipes

// 8. Search Engine for Files

// Index files in a directory:

// Search by keyword
// Return matching files

// Concepts:

// indexing
// async file scanning
// optimization

// 9. Worker Thread Task Processor

// CPU-heavy tasks (like hashing):

// Use worker threads
// Queue tasks
// Return result

// Concepts:

// worker_threads
// parallelism vs concurrency
// Advanced / System Design Level

// 10. Message Queue (Mini RabbitMQ)

// Build your own queue system:

// Producer adds messages
// Consumer processes messages
// Retry on failure

// Concepts:

// queues
// persistence
// distributed thinking

// 11. 🌍 Rate Limiter Middleware

// Prevent abuse:

// Limit API calls per user/IP
// Sliding window / token bucket

// Concepts:

// caching (Redis idea)
// algorithms

// 12. Real-Time Analytics Dashboard Backend

// Track:

// Active users
// Page visits
// Events

// Concepts:

// WebSockets
// event streaming

// 13. Authentication System (JWT + Refresh Tokens)

// Build full auth:

// Login/signup
// JWT access token
// Refresh token rotation

// Concepts:

// security
// token lifecycle

// 14. API Aggregator (Microservice Style)

// Combine multiple APIs:

// Call 3 APIs
// Merge response
// Handle failures gracefully

// Concepts:

// Promise.all vs Promise.allSettled
// resilience patterns
// Bonus (Very Interesting)

// 15. Dead Code Finder

// Scan JS project:

// Find unused files/functions

// Concepts:

// AST parsing (advanced)
// static analysis

// 16. Dependency Visualizer

// Show dependency graph:

// Which file imports what

// Concepts:

// graph structures
// parsing