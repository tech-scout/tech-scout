'use strict'
require('dotenv').config({ silent: true });
const express = require('express');
const logger  = require('morgan');
const path    = require('path');
const bodyParser = require('body-parser');

const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log('server is up and running on port', PORT));
