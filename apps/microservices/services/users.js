const express = require("express");
const {PORTS} = require("./../constants.js");

const app = express();

app.get("/users", (req, res, next) => {
    res.json([
        { id: 1, name: "Abhinav" },
        { id: 2, name: "Rahul" }
    ]);
})

app.listen(PORTS["users"], () => {
    console.log("Users service is listening on " + PORTS["users"]);
});
