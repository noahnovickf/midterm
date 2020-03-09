const db = require("./database");

const login = email => {
  for (let key in db.users) {
    if (email === users[key].email) {
      return true;
    }
  }
};

const getUserID = email => {
  for (let key in db.users) {
    if (email === users[key].email) {
      return users[key].id;
    }
  }
};

module.exports = {
  getUserID,
  login
};
