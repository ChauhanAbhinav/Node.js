// Microservices architecture is a way of building applications as a collection of small, independent services, where each service:

// Handles a specific business function
// Runs independently
// Communicates via APIs or messaging

// Monolith vs Microservices

// // Monolithic App:
// One big application
// Single codebase
// Hard to scale & maintain

// // Microservices App:
// Multiple small services
// Each service = independent
// Easy to scale, deploy, maintain

// Example
// Monolith
// App → Handles Users + Orders + Payments + Products

// Microservices
// User Service
// Product Service
// Order Service
// Payment Service

// Components:
// API Gateway (entry point)
// Services (Node.js apps)
// Databases (can be separate)
// Message Queue (optional)

// Example:

// user-service/index.js
const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Abhinav" }]);
});

app.listen(3001, () => console.log("User Service running"));


// Product service
// product-service/index.js
const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json([{ id: 1, name: "Laptop" }]);
});

app.listen(3002, () => console.log("Product Service running"));

// Order Service (calls other services)
// order-service/index.js
const express = require("express");
const axios = require("axios");

const app = express();

app.get("/orders", async (req, res) => {
  const users = await axios.get("http://localhost:3001/users");
  const products = await axios.get("http://localhost:3002/products");

  res.json({
    orderId: 1,
    user: users.data[0],
    product: products.data[0],
  });
});

app.listen(3003, () => console.log("Order Service running"));


// API Gateway

// Currently you had:
// GET localhost:3001/users
// GET localhost:3002/products
// GET localhost:3003/orders

const express = require("express");
const axios = require("axios");

const app = express();


// Route to User Service
app.get("/users", async (req, res) => {
  const response = await axios.get("http://localhost:3001/users");
  res.json(response.data);
});


// Route to Product Service
app.get("/products", async (req, res) => {
  const response = await axios.get("http://localhost:3002/products");
  res.json(response.data);
});


// Route to Order Service
app.get("/orders", async (req, res) => {
  const response = await axios.get("http://localhost:3003/orders");
  res.json(response.data);
});


app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});

// client calls
// GET localhost:3000/users => GET http://localhost:3001/users
// GET localhost:3000/products => GET http://localhost:3002/products
// GET localhost:3000/orders => GET http://localhost:3003/orders


// Flow:
// 1. Client → API Gateway
// 2. Gateway → Order Service
// 3. Order Service → User + Product Service
// 4. Response comes back
// 5. Gateway → Client

//In real world: use express-gateway module in nodejs