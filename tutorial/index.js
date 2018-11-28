'use strict';

const express = require('express');
const exphbs = require('express-handlebars');
const smartcar = require('smartcar');

const app = express();
app.engine(
  '.hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
  }),
);
app.set('view engine', '.hbs');
const port = 8000;

// TODO: Authorization Step 1: Initialize the Smartcar object

// global variable to save our accessToken
let access;

app.get('/login', function(req, res) {
  // TODO: Authorization Step 2: Launch the authorization flow
});

app.get('/exchange', function(req, res) {
  // TODO: Authorization Step 3: Receive the authorization code

  // TODO: Request Step 1: Obtain an access token
});

app.get('/vehicle', function(req, res) {
  // TODO: Request Step 2: Get vehicle information
});

app.listen(port, () => console.log(`Listening on port ${port}`));
