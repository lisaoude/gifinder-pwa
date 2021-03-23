// Externals
const express = require('express');
const app = express();

// Middleware
app.set('view engine', 'ejs');

const offline = (req, res) => {
  res.render('offline', {
    title: 'Offline',
    headTwo: 'Oops! You seem to be offline :('
  });
};

module.exports = offline;
