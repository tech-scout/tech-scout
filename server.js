'use strict'

require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');

const app     = express();
const PORT    = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());

app.use('/api/events', require('./routes/events'));
app.use('/api/users', require('./routes/users'));

// using history api fallback library to access url paths directly
// referenced from video tutorial on router sertup: https://www.youtube.com/watch?v=eofpZPRUnP8
const history = require('connect-history-api-fallback');
app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log('server is up and running on port', PORT));
