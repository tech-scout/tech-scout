const events = require('express').Router();
const db = require('../models/events');
const auth = require('../models/auth');

/* convenience method for sending */
const sendJSONresp = (req, res) => {
console.log('sendJSONresp is executing');
  res.json({token: res.token, data: res.rows});
};

// events/:id
// this is more specific than the /events, so it goes above

// events.route('/:eventID')
//   .put(db.updateEvent, sendJSONresp)
//   .delete(db.deleteEvent, (req,res)=>res.send(req.params.eventID))

// events
// this is the most general route, so it goes last
events.route('/all')
  .get(db.getAllEvents, sendJSONresp);

events.route('/:userID')
  .get(auth.authorize, db.getEventsForUser, sendJSONresp)
  .post(auth.authorize, db.attend, sendJSONresp);

events.route('/')
  .get(auth.authorize, db.getAllEvents, sendJSONresp)
  .post(auth.authorize, db.addEvent, sendJSONresp);

// export this so it is available to server.js
module.exports = events;
