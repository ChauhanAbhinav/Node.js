const axios = require("axios");
const express = require("express");
const {PORTS} = require("./constants.js");

const router = express.Router();

// User Service
router.get("/users", async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:${PORTS.users}/users`);
        res.json(response.data);
    } catch (err) {
        console.log("User service down");
        res.status(500).json({ error: "User service down" });
    }
});

// Product Service
router.get("/products", async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:${PORTS.products}/products`);
        res.json(response.data);
    } catch (err) {
        console.log("Product service down");
        res.status(500).json({ error: "Product service down" });
    }
});

// Order Service
router.get("/orders", async (req, res) => {
    try {
        const response = await axios.get(`http://localhost:${PORTS.orders}/orders`);
        res.json(response.data);
    } catch (err) {
        console.log("Order service down");
        res.status(500).json({ error: "Order service down" });
    }
});

module.exports = router;