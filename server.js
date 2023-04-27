const express = require("express");

const PORT = 5000;

const app = express();
console.log(PORT);

app.get("/", (req, res) => {
  res.send("<h1>API is working fine</h1>");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
