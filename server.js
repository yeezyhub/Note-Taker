const { application } = require('express');
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

const notesHTMLPath = path.join(__dirname, 'public/notes.html'); //joins the directory name with the route
app.use(express.static('public')); //access the files inside the 'public' folder
app.get('/notes', (req, res) => res.sendFile(notesHTMLPath)); //sends the notes.html to the server


const middleware = (req, res, next) => {
  // ANSI escape code that instructs the terminal to print in yellow
  const yellow = '\x1b[33m%s\x1b[0m';

  // Log out the request type and resource
  console.log(yellow, `${req.method} request to ${req.path}`);

  // Built-in express method to call the next middleware in the stack.
  next();
};

app.use(middleware);

app.listen(PORT, () =>
  console.log(`Listening for requests on port http://localhost:${PORT}/ 🏎️`)
);