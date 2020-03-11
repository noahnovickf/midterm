const express = require("express");
const router = express.Router();
const { getUserID, login } = require("../login");
// var nodemailer = require("nodemailer");

module.exports = db => {
  router.post("/login", (req, res) => {
    res.cookie("username", req.body.username);
    res.sendStatus(200);
  });

  // function sendEmail() {
  //   console.log("sending-email");
  //   var transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     secure: false,
  //     requireTLS: true,
  //     auth: {
  //       user: `john.tests123@gmail.com`,
  //       pass: `raptors123whitby`
  //     }
  //   });

    var mailOptions = {
      from: `john.tests123@gmail.com`,
      to: `david.he07@yahoo.ca`,
      subject: `Sending Email using Node.js`,
      text: `That was easy!`
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ` + info.response);
      }
    });

    console.log("clicked");
  }

  router.post("/email", (req, res) => {
    // res.cookie("username", req.body.username);
    // res.sendStatus(300);
    // sendEmail();
  });

  router.get("/favourites", (req, res) => {
    let userEmail = decodeURIComponent(req.headers.cookie.slice(9));
    console.log(userEmail);
    let userID;
    db.getAllUsers().then(users => {
      for (let i of users) {
        if (userEmail === i.email) {
          userID = i.id;
        }
      }
      console.log(userID);
      db.getFavouriteBikes(userID).then(favourites => {
        const fav = [];
        for (let i of favourites) {
          fav.push(i.bike_id);
        }
        db.getAllBikes().then(bikes => {
          const favBikes = bikes.filter(bike => fav.includes(bike.id));
          res.json({ favBikes });
        });
      });
    });
  });

  router.post("/newListing", (req, res) => {
    db.addListing() //
      .then(bikes => {
        res.json({ bikes });
      })
      .catch(error => res.status(500).json({ error }));
  });

  router.post("/addfavourites/", (req, res) => {
    const bikeId = req.body.bike_id;
    const email = req.cookies.username;
    let userID;
    db.getAllUsers()
      .then(users => {
        for (let i of users) {
          if (email === i.email) {
            userID = i.id;
          }
        }
      })
      .then(() => {
        db.favouriteBike(userID, bikeId);
        res.end();
      });
  });

  router.post("/deleteBikes/", (req, res) => {
    const bikeId = req.body.bike_id;
    db.deleteListing(bikeId).then(() => {
      res.end();
    });
  });

  router.post("/sold/", (req, res) => {
    const bikeId = req.body.bike_id;
    db.markSold(bikeId).then(() => {
      console.log("hi");
      res.end();
    });
  });

  router.get("/", (req, res) => {
    db.getAllBikes()
      .then(bikes => {
        res.json({ bikes });
      })
      .catch(error => res.status(500).json({ error }));
  });
  return router;
};
