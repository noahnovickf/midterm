const express = require('express');
const router = express.Router();


module.exports = () => {
  router.get('/', (req, res) => 
  res.sendFile(path.join(__dirname+'../html/index.html'))
  );
  
}

