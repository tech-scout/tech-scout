'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');

const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

// using history api fallback library to access url paths directly

const history = require('connect-history-api-fallback');
app.use(history());

app.use(logger('dev'));

app.use(bodyParser.json());

app.use('api/events', require('./routes/events'));

app.use('api/signup', require('./routes/signup'));

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.redirect('/app'));

app.listen(PORT, () => console.log('server is up and running on port', PORT));
