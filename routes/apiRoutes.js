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

  router.post("/addbike/", (req, res) => {
    db.addListing(req.body.addBikeInfo);
    res.send("OK");
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

  router.post("/sendmsg", (req, res) => {
    let sendMsgData = {
      message: req.body.msgData.message
    };
    console.log(req.body.msgData);
    const email = req.cookies.username;
    let userID;
    db.getAllUsers().then(users => {
      for (let i of users) {
        if (email === i.email) {
          userID = i.id;
        }
      }
    });
    let recID;
    db.getUserByBikeID(req.body.msgData.bike_id).then(res => {
      recID = res;
      console.log(recID);
      sendMsgData.rec_ID = recID.user_id;
      sendMsgData.user_id = userID;
      console.log(sendMsgData);
      db.createMsg(sendMsgData);
    });
  });

  router.get("/", (req, res) => {
    db.getAllBikes()
      .then(bikes => {
        res.json({ bikes });
      })
      .catch(error => res.status(500).json({ error }));
  });

  router.get("/showMSG", (req, res) => {
    const email = req.cookies.username;
    let userID;
    db.getAllUsers()
      .then(users => {
        for (let i of users) {
          if (email === i.email) {
            userID = i.id;
            console.log(userID);
          }
        }
      })
      .then(() => {
        db.getMsg(userID).then(messages => {
          console.log(messages);
          res.json({ messages });
        });
      });
  });

  return router;
};
