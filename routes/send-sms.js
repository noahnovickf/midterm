const express = require("express");
const router = express.Router();
const ID = "AC1";
const token = "1";
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
      from: "+1",
      to: "+1"
    })
    .then(message => console.log(message.sid))
    .then(() => {
      res.send("success");
    })
    .catch(err => console.log(err));
});

module.exports = router;
// req.body.message,
