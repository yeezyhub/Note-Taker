const express = require('express');
const path = require('path');
const api = require('./api');

const app = express();
const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //access the files inside the 'public' folder

require('./public/routes.js')(app);
// require('./api')(app);

app.listen(PORT, () =>
  console.log(`Listening for requests on port http://localhost:${PORT}/`)
);