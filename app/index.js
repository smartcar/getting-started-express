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

const client = new smartcar.AuthClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  scope: ['required:read_vehicle_info'],
  testMode: true,
});

// global variable to save our accessToken
let access;

app.get('/login', function(req, res) {
  const authUrl = client.getAuthUrl();

  res.render('home', {
    url: authUrl,
  });
});

app.get('/exchange', function(req, res) {
  const code = req.query.code;

  return client.exchangeCode(code)
    .then(function(_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;

      res.redirect('/vehicle');
    });
});

app.get('/vehicle', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);

      return vehicle.info();
    })
    .then(function(info) {
      res.render('vehicle', {
        info: info,
      });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
