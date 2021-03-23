// Externals
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();

// Middleware
app.set('view engine', 'ejs');

// Internals
const url = process.env.URL;
const key = process.env.KEY;

const detail = async (req, res) => {
  fetch(`${url}${req.params.id}?&api_key=${key}`)
    .then(async response => {
      const data = await response.json()

      res.render('detail', {
        title: data.data.title,
        headTwo: data.data.title,
        gif: `https://media.giphy.com/media/${req.params.id}/giphy.gif`,
        postTime: data.data.import_datetime,
        source: data.data.source,
        viewGiphy: data.data.bitly_url
      });
    });
};


module.exports = detail;
