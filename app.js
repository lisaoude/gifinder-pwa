const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

// express app
const app = express();

// css file
app.use(express.static('public'));

// register view engine 
app.set('view engine', 'ejs');

// internals
const PORT = process.env.PORT || 3000;
const url = process.env.URL;
const trendingType = process.env.TRENDING_TYPE;
const key = process.env.KEY;
const limit = process.env.LIMIT;



// routing
// in modules later
app.get('/', (req, res) => {
  fetch(`${url}${trendingType}?&api_key=${key}&limit=${limit}`)
    .then(async response => {
      const data = await response.json()

      res.render('index', {
        props: data.data,
        title: 'Home',
        headTwo: 'The most popular gifs right now'

        // search for gifs, for later? for now just mvp
        // headTwo: 'Get a Gif!'
      });
    });
});



app.get('/gif/:id', (req, res) => {
  fetch(`${url}${req.params.id}?&api_key=${key}`)
    .then(async response => {
      const data = await response.json()

      res.render('detail', {
        title: 'Detail',
        headTwo: data.data.title,
        gif: `https://media.giphy.com/media/${req.params.id}/giphy.gif`,
        postTime: data.data.import_datetime,
        source: data.data.source,
        viewGiphy: data.data.bitly_url
      });
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



// listen for requests
app.listen(PORT, () => {
  console.log(`App is launched on  http://localhost:${PORT}`)
});
