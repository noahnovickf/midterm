const { Pool } = require("pg");

const pool = new Pool({
  user: "user",
  password: "123",
  host: "localhost",
  database: "midterm"
});

const getFeaturedBikes = () => {
  return pool
    .query(`SELECT * FROM bikes WHERE featured = true`)
    .then(res => res.rows);
};

const getAllBikes = () => {
  return pool
    .query(
      `
  SELECT * FROM bikes;
  `
    )
    .then(res => res.rows);
};

const addListing = bike => {
  return pool
    .query(
      `INSERT INTO bikes (user_id, title, description, image_url, price, category, discipline, featured)
    Values (3,$1,$2,$3,$4,$5,$6,false);
    `,
      [
        bike.title,
        bike.description,
        bike.image_url,
        bike.price,
        bike.category,
        bike.discipline
      ]
    )
    .then(res => res.rows[0]);
};

const getMsg = userID => {
  return pool
    .query(
      `SELECT msg, users.email FROM messages JOIN users ON sender_id = users.id where rec_id = $1;
    `,
      [userID]
    )
    .then(res => res.rows);
};

const createMsg = msgData => {
  return pool.query(
    `INSERT INTO messages (msg, rec_id, sender_id)
  VALUES ($1, $2, $3);
  `,
    [msgData.message, msgData.rec_ID, msgData.user_id]
  );
};

const filterBikesPrice = options => {
  //LIGHTBNB
  const queryParams = [];
  let queryString = `SELECT * FROM bikes WHERE 1=1`;
  if (options.minimum_price) {
    queryParams.push(Number(options.minimum_price));
    queryString += `AND price >$${queryParams.length}`;
  }
  if (options.maximum_price) {
    queryParams.push(Number(options.maximum_price));
    queryString += `AND price <$${queryParams.length}`;
  }

  return pool.query(queryString, queryParams).then(res => res.rows);
};

const favouriteBike = (user, bike) => {
  const arr = [user, bike];
  return pool.query(
    `INSERT INTO favourites (user_id, bike_id)
    VALUES ($1,$2)
    RETURNING *;
    `,
    arr
  );
};

const getAllUsers = () => {
  return pool.query(`SELECT * from users;`).then(res => {
    //console.log(res.rows);
    return res.rows;
  });
};

const findFavourites = id => {
  return pool
    .query(`SELECT * from favourites where user_id = $1`, [id])
    .then(res => res.rows);
};

const getFavouriteBikes = user => {
  //tiny app CURRENT USER FUNCTION
  return pool
    .query(
      `SELECT bike_id from favourites
    WHERE user_id = $1
    `,
      [user]
    )
    .then(res => res.rows);
};

const getUserByBikeID = bikeID => {
  return pool
    .query(
      `
  SELECT user_id from bikes where bikes.id = $1;
  
  `,
      [bikeID]
    )
    .then(res => res.rows[0]);
};

const deleteListing = bike => {
  //tiny app
  return pool.query(
    `
  DELETE from bikes 
  where id = $1
  `,
    [bike]
  );
};

const markSold = bike => {
  return pool.query(
    `
  UPDATE bikes
  SET sold= true
  where id = $1
  `,
    [bike]
  );
};

const filterType = category => {
  //same as price
  return (
    pool.query(`SELECT * FROM bikes where category = '$1'
  `),
    [category.category]
  );
};

const filterDiscipline = discipline => {
  return (
    pool.query(`SELECT * FROM bikes where category = '$1'
  `),
    [discipline]
  );
};

module.exports = {
  deleteListing,
  getFavouriteBikes,
  favouriteBike,
  filterBikesPrice,
  getFeaturedBikes,
  addListing,
  getAllBikes,
  filterDiscipline,
  filterType,
  getAllUsers,
  findFavourites,
  markSold,
  createMsg,
  getUserByBikeID,
  getMsg
};
