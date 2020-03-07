const express = require("express");
const app = express();
const port = 3000;
const db = require("./database");

const apiRouter = require("./routes/apiRoutes");

app.use("/api", apiRouter(db));

app.use(express.static("public"));

//app.get("/", (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
