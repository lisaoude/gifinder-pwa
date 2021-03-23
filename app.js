// Externals
const express = require('express');
const fetch = require('node-fetch');
const compression = require('compression');
require('dotenv').config();
const app = express();

// Routes
const routes = require("./router/routes");

// Middleware & Static files
app.use(express.static('public'));
app.use(compression());
app.set('view engine', 'ejs');
app.use(routes);

// Internals
const PORT = process.env.PORT || 5500;

// listen for requests
app.listen(PORT, () => {
  console.log(`App is launched on http://localhost:${PORT}`)
});
