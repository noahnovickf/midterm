const db = require("./database");

const login = email => {
  for (let key in db.users) {
    if (email === db.users[key].email) {
      return email;
    }
  }
};

const getUserID = email => {};

module.exports = {
  getUserID,
  login
};
