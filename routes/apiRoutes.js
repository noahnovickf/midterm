const express = require("express");
const router = express.Router();
const { getUserID, login } = require("../login");

module.exports = db => {
  router.post("/login", (req, res) => {
    res.cookie("username", req.body.username);
    res.sendStatus(200);
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
      console.log(
        db.getFavouriteBikes(userID).then(favourites => {
          res.json({ favourites });
        })
      );
      /*
      1. find the user that matches the email
      2. find all the favourites of the user
      3. return json of favorites
      */
      res.json({ users });
    });
  });

  router.post("/newListing", (req, res) => {
    db.addListing() //
      .then(bikes => {
        res.json({ bikes });
      })
      .catch(error => res.status(500).json({ error }));
  });

  router.get("/", (req, res) => {
    db.getAllBikes()
      .then(bikes => {
        res.json({ bikes });
        //console.log(bikes);
      })
      .catch(error => res.status(500).json({ error }));
  });

  // router.get("/pricerange", (req, res) => {});

  // router.get("/bikediscipline", (req, res) => {});

  return router;
};

//outer.get("/logout", (req, res) => {});
