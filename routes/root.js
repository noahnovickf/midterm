const express = require('express');
const router = express.Router();


module.exports = () => {
  router.get('/', (req, res) => {});
  return router;
}

router.get('/favourites', (req, res) => {});

router.get('/login', (req, res) => {});

router.get('/logout', (req, res) => {});

router.post('/newad', (req, res) => {});

router.get('/allbikes', (res, req) => {});

router.get('/biketype', (req, res) => {});

router.get ('/pricerange', (req, res) => {})

