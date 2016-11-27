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
  getAllEvents(req, res, next) {
    db.any('SELECT * from events;')
      .then((events) => {
        res.rows = events;
        next();
      })
      .catch(error => next(error));
  },

  getEvent(req, res, next) {
    db.one(`SELECT * from events WHERE id = ${req.body.event.id}`)
      .then((event) => {
        res.rows = event;
        next();
      })
      .catch(error => next(error));
  },

  getEventsForInterest(req, res, next) {
    db.any(`SELECT * from events LEFT JOIN eventInterestEdge ON events.id = eventInterestEdge.event WHERE eventInterestEdge.interest = ${req.body.interest}`)
      .then((events) => {
        res.rows = events;
        next();
      })
      .catch(error => next(error));
  },

  getEventsForUser(req, res, next) {
    db.any(`SELECT * from events LEFT JOIN attendance ON attendance.event = events.id WHERE attendance.user = ${req.body.user.id}`)
      .then((events) => {
        res.rows = events;
        next();
      })
      .catch(error => next(error));
  },

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

  getAllInterests(req, res, next) {
    db.any(`SELECT * from interests`)
      .then((interests) => {
        res.rows = interests;
        next();
      })
      .catch(error => next(error));
  },

  getUserInterests(req, res, next) {
    db.any(`SELECT * from interests LEFT JOIN userInterestEdge ON userInterestEdge.interest = interests.id WHERE userInterestEdge.user_id = ${req.body.user.id}`)
      .then((interests) => {
        res.rows = interests;
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

  getInterestsForEvent(req, res, next) {
    db.any(`SELECT * FROM interests LEFT JOIN eventInterestEdge ON eventInterestEdge.interest = interests.id WHERE eventInterestEdge.event = ${req.body.event.id}`)
      .then((interests) => {
        res.rows = users;
        next();
      })
      .catch(error => next(error));
  },

  /* POST /events */
  /* creates a new event, returns the newly created record */
  addEvent(req, res, next) {
    console.log('===addEvent===',req.body);
    db.one(
      'INSERT INTO events (name, description, img_url) VALUES ($/title/, $/desc/, $/url/) returning *;',
      req.body
      )
      .then((event) => {
        console.log('ADDED TASK SUCCESSFUL');
        res.rows = event;
        next();
      })
      .catch(error => next(error));
  },

  /* PUT /events/:eventID */
  updateEvent(req, res, next) {
    // tID is invented here
    req.body.tID = Number.parseInt(req.params.eventID);
    req.body.completed = !!req.body.completed;

    db.one(
      `UPDATE event SET
      name = $/name/,
      description = $/description/,
      completed = $/completed/,
      WHERE id = $/tID/
      returning *;
      `, req.body)
      .then((event) => {
        console.log('ADDED UPDATED SUCCESSFULLY');
        res.rows = event;
        next();
      })
      .catch(error => next(error));
  },

  /* DELETE /events/:id */
  deleteEvent(req, res, next) {
    const tID = Number.parseInt(req.params.eventID, 10);

    db.none(`
      DELETE FROM event
      WHERE id = $1
      `, tID)

    .then(() => {
      console.log('DELETE COMPLETED');
      next();
    })
    .catch(error => next(error));
  },
}
