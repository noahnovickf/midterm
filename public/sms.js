const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

client.messages
  .create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.CELL_PHONE_NUMBER,
    body: "You just sent an SMS from Node.js using Twilio!"
  })
  .then(messsage => console.log(message.sid));

// var nodemailer = require(`nodemailer`);

// function sendEmail() {
//   console.log(`sending-the-email`);
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     secure: false,
//     requireTLS: true,
//     auth: {
//       user: "john.tests123@gmail.com",
//       pass: "raptors123whitby"
//     }
//   });

//   var mailOptions = {
//     from: "john.tests123@gmail.com",
//     to: "david.he07@yahoo.ca",
//     subject: "Sending Email using Node.js",
//     text: "That was easy!"
//   };

//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(`Email sent: ` + info.response);
//     }
//   });

//   console.log(`clicked`);
//   //   Email.send({
//   //     // Host: process.env.EMAIL_HOST,
//   //     // Username: process.env.EMAIL_USERNAME,
//   //     // Password: process.env.EMAIL_PASSWORD,
//   //     Host: `smtp.gmail.com`,
//   //     Username: `john_test12321@yahoo.ca`,
//   //     Password: `raptors123whitby`,
//   //     To: to,
//   //     From: `john_test12321@yahoo.ca`, // `david.he613@gmail.com`,
//   //     Subject: `David's email`,
//   //     Body: `You've got mail.`
//   //   }).then(message => alert(`David He mail sent successfully`));
// }
