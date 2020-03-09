const express = require("express");
const router = express.Router();
const getUserId = require("../login");

module.exports = db => {
  router.get("/", (req, res) => {
    db.getAllBikes()
      .then(bikes => {
        res.json({ bikes });
        //console.log(bikes);
      })
      .catch(error => res.status(500).json({ error }));
  });

  router.post("/login", (req, res) => {
    res.cookie("username", "Username");
    res.send("ok");
  });

  router.get("/favourites", (req, res) => {
    const userid = getUserId();
    db.getFavouriteBikes(userid) //I NEED TO PASS IN USER ID TO THIS FUNCTION AFTER I WRITE A FUNCTION TO GET THE CURRENT USER ID
      .then(favourites => {
        res.json({ favourites });
      })
      .catch(error => res.status(500).json({ error }));
  });

  router.post("/newListing", (req, res) => {
    db.addListing() //
      .then(bikes => {
        res.json({ bikes });
      })
      .catch(error => res.status(500).json({ error }));
  });

  router.get("/bikecategory", (req, res) => {
    db.filterType()
      .then(bikes => {
        res.json({ bikes });
      })
      .catch(error => res.status(500).json({ error }));
  });

  // router.get("/pricerange", (req, res) => {});

  // router.get("/bikediscipline", (req, res) => {});

  return router;
};

router.get("/logout", (req, res) => {});
