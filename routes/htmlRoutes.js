// Dependencies
const path = require("path");
const fs = require('fs');

// Routing
module.exports = app => {

    fs.readFile('db/db.json', 'utf8', function (err, data) {

        if (err) throw err;
        //joins the directory name with the route
        const notesHTMLPath = path.join(__dirname, '../public/notes.html');
        const indexHTMLPath = path.join(__dirname, '../public/index.html');

        // HTML GET Requests
        app.get('/notes', (req, res) => res.sendFile(notesHTMLPath)); //sends the notes.html to the server
        app.get('*', (req, res) => res.sendFile(indexHTMLPath)); //routes other than specific routes forwarded to index.html route using *
    })
};