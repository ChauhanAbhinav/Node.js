const express = require("express");
const apiGateway = require("./gateway.js")
const path = require("path");

const {PORT} = require("./constants.js");

const app = express();

// Mount Gateway
app.use("/", apiGateway);

app.get("/", (req, res, next)=>{
    res.sendFile(path.join(__dirname, "index.html"));
})

app.listen(PORT, () => {
    console.log("Microservices app is listening on " + PORT);
})
