const express = require("express");
const app = express();
const port = 3000;
const db = require("./database");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const smsroutes = require('./routes/send-sms')

const apiRouter = require("./routes/apiRoutes");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRouter(db));
app.use("/allbikes", apiRouter(db));
app.use(express.static("public"));
app.use('/api/sms', smsroutes);

//app.get("/", (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
