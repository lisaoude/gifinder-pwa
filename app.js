const express = require('express');

// express app
const app = express();

// css file
app.use(express.static('static'));

// register view engine 
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// routing
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blog', (req, res) => {
  res.render('blog', { title: 'Blog' });
});

// 404 page
// at the bottom, so it only shows if it doesn't match any of the above
app.use((req, res) => {
  res.render('404', { title: '404' });
});
