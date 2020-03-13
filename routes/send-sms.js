const express = require("express");
const router = express.Router();
const ID = "";
const token = "";
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
      from: "+",
      to: "+"
    })
    .then(message => console.log(message.sid))
    .then(() => {
      res.send("success");
    })
    .catch(err => console.log(err));
});

module.exports = router;
// req.body.message,
