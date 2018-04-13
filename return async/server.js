const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/foo", (req, res) => {
  res.json({ foo: 1 });
});

app.get("/sync", (req, res) => {
  res.sendFile(path.resolve(__dirname, "sync.html"));
});

app.get("/async", (req, res) => {
  res.sendFile(path.resolve(__dirname, "async.html"));
});

app.listen(3000);
