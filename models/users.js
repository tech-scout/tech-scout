const pg = require('pg-promise')({/* OPTIONAL Initialization Options */});

const config = {
  host:       process.env.DB_HOST,
  port:       process.env.DB_PORT,
  database:   process.env.DB_NAME,
  user:       process.env.DB_USER,
  password:   process.env.DB_PASS,
};

const db = pg(config);

module.exports = {

  /* GET /events */
  getUsersForEvent(req, res, next) {
    db.any(`SELECT * from users LEFT JOIN attendance ON attendance.user = users.id WHERE attendance.event = ${req.body.event.id}`)
      .then((users) => {
        res.rows = users;
        next();
      })
      .catch(error => next(error));
  },

  getUser(req, res, next) {
    db.one(`SELECT * FROM users WHERE id = ${req.body.user.id}`)
  },

  getFollowers(req, res, next) {
    db.any(`SELECT * from users LEFT JOIN following ON following.follower = users.id WHERE following.followee = ${req.body.user.id}`)
      .then((users) => {
        res.rows = users;
        next();
      })
      .catch(error => next(error));
  },

  getFollowing(req, res, next) {
    db.any(`SELECT * from users LEFT JOIN following ON following.followee = users.id WHERE following.follower = ${req.body.user.id}`)
      .then((users) => {
        res.rows = users;
        next();
      })
      .catch(error => next(error));
  },

  getUsersForInterest(req, res, next) {
    db.any(`SELECT * from users LEFT JOIN userInterestEdge ON userInterestEdge.user_id = users.id WHERE userInterestEdge.interest = ${req.body.interest.id}`)
      .then((users) => {
        res.rows = users;
        next();
      })
      .catch(error => next(error));
  },

  createUser(req, res, next) {
    db.any(`INSERT INTO `)
  }
}
