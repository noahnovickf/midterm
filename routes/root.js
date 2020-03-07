const express = require("express");
const router = express.Router();
const { getFeaturedBikes } = require("../database");

module.exports = () => {
  router.get("/", (req, res) => {
    res.sendStatus(getFeaturedBikes());
  });
  return router;
};
