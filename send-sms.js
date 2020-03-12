const express = require("express");
const router = express.Router();
// console.log(
//   "environment",
//   process.env.TWILIO_ACCOUNT_SID,
//   process.env.TWILIO_AUTH_TOKEN
// );

router.post('/sendsms', (req,res) => {
  const data = req;
  console.log(req);
})

// const ID = "AC4a51272f6caea6b1d6f01820179b143f";
// const token = "efdabc674c0e61b7e27ffab24d348598";
// const client = require("twilio")(ID, token);
// client.messages
//   .create({
//     body: "You just sent received a message about the bike you are selling!",
//     from: "+16364775721",
//     to: "+12899271833"
//   })
//   .then(messsage => console.log(message.sid)); 