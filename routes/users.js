const users = require('express').Router();
const db = require('../models/users');
const auth = require('../models/auth');

/* convenience method for sending */

const sendJSONresp = (req, res) => res.json({token: res.token, body: res.rows});

// events/:id
// this is more specific than the /events, so it goes above

// events.route('/:eventID')
//   .put(db.updateEvent, sendJSONresp)
//   .delete(db.deleteEvent, (req,res)=>res.send(req.params.eventID))

// events
// this is the most general route, so it goes last
users.route('/')
  .post(db.createUser, auth.createToken, (req, res) => {
    // console.log(res.token);
    res.json({token: res.token});
  })
  .get(db.getUser, auth.checkPassword, sendJSONresp);
  // .get((req, res) => res.send(200));

// export this so it is available to server.js
module.exports = users;
