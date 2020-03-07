const { Pool } = require("pg");

const pool = new Pool({
  user: "user",
  password: "123",
  host: "localhost",
  database: "midterm"
});

const addListing = bike => {
  return pool
    .query(
      `INSERT INTO bikes (user_id, title, description, image_url, price, category, discipline, featured)
    Values ($1,$2,$3,$4,$5,$6,$7,false)
    RETURNING *;
    `,
      [
        bike.user_id,
        bike.title,
        bike.description,
        bike.image_url,
        bike.price,
        bike.category,
        bike.discipline,
        bike.featured
      ]
    )
    .then(res => res.rows[0]);
};

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

const filterBikes = options => {
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

const favouriteBike = ids => {
  return pool.query(
    `INSERT INTO favourites (user_id, bike_id)
    VALUES ($1,$2)
    RETURNING *;
    `,
    [ids.user_id, ids.bike_id]
  );
};

const getFavouriteBikes = user => {
  return pool
    .query(
      `SELECT * from favourites
    WHERE user_id = $1
    `,
      [user.user_id]
    )
    .then(res => res.rows);
};

const deleteListing = bike => {
  return (
    pool.query(`
  DELETE from bikes 
  where bike_id =  $1
  `),
    [bike]
  );
};

module.exports = {
  deleteListing,
  getFavouriteBikes,
  favouriteBike,
  filterBikes,
  getFeaturedBikes,
  addListing,
  getAllBikes
};
