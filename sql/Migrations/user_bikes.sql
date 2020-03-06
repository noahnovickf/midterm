CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE bikes(
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR (255) NOT NULL,
  description text NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL DEFAULT 0,
  category VARCHAR(255) NOT NULL,
  discipline VARCHAR (255) NOT NULL,
  featured boolean DEFAULT false
);

CREATE TABLE favourites (
id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
bike_id INTEGER NOT NULL REFERENCES bikes(id) ON DELETE CASCADE
);
