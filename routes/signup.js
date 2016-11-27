const signup = require('express').Router();
const db = require('../models/users');
const auth = require('../models/auth');

/* convenience method for sending */
const sendJSONresp = (req, res) => res.json({res.token, res.rows});

// events/:id
// this is more specific than the /events, so it goes above

// events.route('/:eventID')
//   .put(db.updateEvent, sendJSONresp)
//   .delete(db.deleteEvent, (req,res)=>res.send(req.params.eventID))

// events
// this is the most general route, so it goes last
signup.route('/')

  .get(auth.createToken, , sendJSONresp)

  .post(db.addEvent, sendJSONresp);

// export this so it is available to server.js
module.exports = signup;
