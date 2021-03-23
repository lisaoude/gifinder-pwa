// Externals
const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();
const app = express();

// Middleware
app.set('view engine', 'ejs');

// Internals
const url = process.env.URL;
const trendingType = process.env.TRENDING_TYPE;
const key = process.env.KEY;
const limit = process.env.LIMIT;

const home = async (req, res) => {
  fetch(`${url}${trendingType}?&api_key=${key}&limit=${limit}`)
    .then(async response => {
      const data = await response.json()

      res.render('index', {
        props: data.data,
        title: 'Gifinder',
        headTwo: 'The most popular gifs right now'
      });
    });
};


module.exports = home;