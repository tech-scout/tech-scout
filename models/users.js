const db = require('../db/config');

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
    console.log(req.query);
    db.one(`SELECT * FROM users WHERE username = '${req.query.username}' AND password = '${req.query.password}'`)
      .then((user) => {
        console.log(user);
        res.user = user;
        next();
      })
      .catch(error => next(error));
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
    db.one(`INSERT INTO users (username, title, password, email, img_url) VALUES ($/username/, $/title/, $/password/, $/email/, $/img_url/) returning *`, req.body)
      .then((user) => {
        res.user = user;
        next();
      })
      .catch(error => next(error));
  },
}
