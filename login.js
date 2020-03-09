const db = require("./database");

const login = email => {
  for (let key in db.users) {
    if (email === db.users[key].email) {
      return email;
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
