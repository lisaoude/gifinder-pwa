// Externals
const express = require('express');
const app = express();

// Middleware
app.set('view engine', 'ejs');

const error = (req, res) => {
  res.render('404', {
    title: '404',
  });
};

module.exports = error;
