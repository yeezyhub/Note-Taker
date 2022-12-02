//Dependencies
const express = require('express');
const path = require('path');

//creating the express server
const app = express();
const PORT = process.env.PORT || 3001; //porting for Heroku and local

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //access the files inside the 'public' folder

//Route Dependencies
require('./routes/apiRoutes.js')(app);
require('./routes/htmlRoutes.js')(app);

//PORT listen from localhost
app.listen(PORT, () =>
  console.log(`Listening for requests on port http://localhost:${PORT}/`)
);