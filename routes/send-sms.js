const express = require("express");
const router = express.Router();
const ID = "ACa8fbbc4d5f533b773df9939e86dbbe20";
const token = "33d013ff083ddfc3d21fc0e0036c5ba5";
const client = require("twilio")(ID, token);
// console.log(
//   "environment",
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

router.post("/send", (req, res) => {
  return client.messages
    .create({
      body: req.body.message,
      from: "+18452542529",
      to: "+12899271833"
    })
    .then(message => console.log(message.sid))
    .then(() => {
      res.send("success");
    })
    .catch(err => console.log(err));
});

module.exports = router;
// req.body.message,
