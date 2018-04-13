const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/solution", (req, res) => {
  res.sendFile(path.resolve(__dirname, "solution.html"));
});

app.get("/problem", (req, res) => {
  res.sendFile(path.resolve(__dirname, "problem.html"));
});

app.listen(3000);
