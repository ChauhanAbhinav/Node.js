const express = require("express");
const axios = require("axios");
const {PORTS} = require("./../constants.js");

const app = express();

app.get("/orders", async (req, res) => {
  const users = await axios.get(`http://localhost:${PORTS.users}/users`);
  const products = await axios.get(`http://localhost:${PORTS.products}/products`);

  res.json({
    orderId: 1,
    user: users.data[0],
    product: products.data[0],
  });
});


app.listen(PORTS["orders"], () => {
    console.log("Orders service is listening on " + PORTS["orders"]);
});
