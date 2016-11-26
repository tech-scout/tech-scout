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
  }

  getEventsForInterest(req, res, next) {
    db.any(`SELECT * from events LEFT JOIN eventInterestEdge ON events.id = eventInterestEdge.event WHERE eventInterestEdge.interest = ${req.body.interest}`)
      .then((events) => {
        res.rows = events;
        next();
      })
      .catch(error => next(error));
  }

  getEventsForUser(req, res, next) {
    db.any(`SELECT * from events LEFT JOIN attendance ON attendance.event = events.id WHERE attendance.user = ${req.body.user.id}`)
      .then((events) => {
        res.rows = events;
        next();
      })
      .catch(error => next(error));
  }

  getUsersForEvent(req, res, next) {
    db.any(`SELECT * from users LEFT JOIN attendance ON attendance.user = users.id WHERE attendance.event = ${req.body.event.id}`)
      .then((users) => {
        res.rows = users;
        next();
      })
      .catch(error => next(error));
  }

  getUser(req, res, next) {
    db.one(`SELECT * FROM users WHERE id = ${req.body.user.id}`)
  }

  /* POST /events */
  /* creates a new event, returns the newly created record */
  addEvent(req, res, next) {
    console.log('===addEvent===',req.body);
    db.one(
      'INSERT INTO events (name, description, url) VALUES ($/name/, $/desc/, $/url/) returning *;',
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
