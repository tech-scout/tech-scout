const events = require('express').Router();
const db = require('../models/events');

/* convenience method for sending */
const sendJSONresp = (req, res) => res.json(res.rows);

// events/:id
// this is more specific than the /events, so it goes above

// events.route('/:eventID')
//   .put(db.updateEvent, sendJSONresp)
//   .delete(db.deleteEvent, (req,res)=>res.send(req.params.eventID))

// events
// this is the most general route, so it goes last
events.route('/')
<<<<<<< HEAD
  .get(db.getEvents, sendJSONresp)
=======
  .get(db.getAllEvents, sendJSONresp)
>>>>>>> e57b1e60aa5faf7bf5d1941ecb8bdf282a1cb05a
  .post(db.addEvent, sendJSONresp);

// export this so it is available to server.js
module.exports = events;
