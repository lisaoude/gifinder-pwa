// Externals
const express = require('express');
const router = express.Router();


// Renders
const home = require('./renders/home');
const detail = require('./renders/detail')
const offline = require('./renders/offline')
const error = require('./renders/error')


// Routes
router
  .get('/', home)
  .get('/gif/:id', detail)
  .get('/offline', offline)
  .get('/error', error);


module.exports = router;