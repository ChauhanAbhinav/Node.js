let express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
