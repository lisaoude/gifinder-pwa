const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

// express app
const app = express();

// css file
app.use(express.static('static'));

// register view engine 
app.set('view engine', 'ejs');

// internals
const url = process.env.URL;
const trendingType = process.env.TRENDING_TYPE;
const key = process.env.KEY;
const limit = process.env.LIMIT;

// listen for requests
app.listen(3000);

// routing
app.get('/', (req, res) => {
  fetch(`${url}${trendingType}?&api_key=${key}&limit=${limit}`)
  .then (async response => {
    const data = await response.json()
    console.log(data)
    res.render('index', {
      title: 'Home',
      headTwo: 'Get a Gif!'
    });
  });
});




app.get('/gif:id', (req, res) => {
  res.render('detail', { 
    title: 'Detail',
    headTwo: 'gif name'
  });
});

app.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog' });
});

// 404 page
// at the bottom, so it only shows if it doesn't match any of the above
app.use((req, res) => {
  res.render('404', { title: '404' });
});
