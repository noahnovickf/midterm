const express = require("express");
const app = express();
const port = 3000;
const { getFeaturedBikes } = require("./database");
//const rootRouter = require("./routes/root");
//app.use(rootRouter);
app.use(express.static("public"));

app.get("/", (req, res) => {
  getFeaturedBikes();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
