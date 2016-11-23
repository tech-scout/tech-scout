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
  getEvents(req, res, next) {
    db.any('SELECT * from events;')
      .then((events) => {
        res.rows = events;
        next();
      })
      .catch(error => next(error));
  },

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
