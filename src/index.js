const express = require("express");
const app = express();

app.get("/health", (req, res) => res.json({ status: "ok" }));

const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = server; // 👈 Needed for Jest
