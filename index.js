const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/views/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/views/triangle.html");
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;
  const area = Math.PI * radius * radius;
  res.send(`<h1>Circle area is ${area}</h1>`);
});

app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * height * base;
  res.send(`<h1>Triangle area is ${area}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
