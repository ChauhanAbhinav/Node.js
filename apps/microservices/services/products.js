const express = require("express");
const {PORTS} = require("./../constants.js");

const app = express();

app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
    ]);
});

app.listen(PORTS["products"], () => {
    console.log("Products service is listening on " + PORTS["products"]);
});
