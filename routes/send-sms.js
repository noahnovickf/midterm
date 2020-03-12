const express = require("express");
const router = express.Router();
const ID = "ACbab1af4f6590ddf73bd9373c85be9c38";
const token = "3f1a355f1c8e6f131cf77d2faa31aeed";
const client = require("twilio")(ID, token);
// console.log(
//   "environment",
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

router.post('/send', (req,res) => {
return client.messages
    .create({
      body: req.body.message,
      from: "+15153734957",
      to: "+16479877506"
    })
    .then(message => console.log(message.sid))
    .then(() => {
      res.send('success')
    }).catch(err => console.log(err));
  })

module.exports = router;
// req.body.message,