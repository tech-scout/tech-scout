BEGIN;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS following;
DROP TABLE IF EXISTS event;

CREATE TABLE user(
  id SERIAL PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  title VARCHAR(64) DEFAULT '',
  password VARCHAR(64) NOT NULL,

);

CREATE TABLE event(
  id SERIAL PRIMARY KEY,
  attendees INTEGER ARRAY,
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  event_date TIMESTAMP NOT NULL )
