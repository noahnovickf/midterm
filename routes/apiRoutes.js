const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    db.getFeaturedBikes()
      .then(bikes => {
        res.json({ bikes });
        console.log(bikes);
      })
      .catch(error => res.status(500).json({ error }));
  });
  return router;
};

router.get("/favourites", (req, res) => {});

router.get("/login", (req, res) => {});

router.get("/logout", (req, res) => {});

router.post("/newad", (req, res) => {});

router.get("/allbikes", (res, req) => {});

router.get("/biketype", (req, res) => {});

router.get("/pricerange", (req, res) => {});
