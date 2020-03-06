const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.static("public"));

// Seperated Routes
const root = require('./routes/root')();

// app.use('/', root);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

exports.module = {
  express
}