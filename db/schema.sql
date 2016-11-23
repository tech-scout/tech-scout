BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS following;
DROP TABLE IF EXISTS events;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  title VARCHAR(64) DEFAULT '',
  password VARCHAR(64) NOT NULL,
);

CREATE TABLE events(
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),
  event_date TIMESTAMP NOT NULL,
  location VARCHAR(64) NOT NULL);

CREATE TABLE interests(
  id SERIAL PRIMARY KEY,
  name VARCHAR(32) NOT NULL);

CREATE TABLE following(
  follower INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  followee INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY(follower, followee));
CREATE INDEX follower_idx ON following(follower);
CREATE INDEX followee_idx ON following(followee);

CREATE TABLE userInterestEdge(
  user INTEGER NOT NULL REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE,
  interest INTEGER NOT NULL REFERENCES interests(id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY(user, interest));
CREATE INDEX user_idx ON userInterestEdge (user);
CREATE INDEX interest_idx ON userInterestEdge (interest);

CREATE TABLE eventInterestEdge(
  event INTEGER NOT NULL REFERENCES events(id) ON UPDATE CASCADE ON DELETE CASCADE,
  interest INTEGER NOT NULL REFERENCES interests(id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY(event, interest));
CREATE INDEX event_idx ON eventInterestEdge (event);
CREATE INDEX interest_idx ON eventInterestEdge (interest);


COMMIT;
