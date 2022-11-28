const { application } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db/db.json');

// const saveButtonEl = document.querySelector('.fa-save');


module.exports = app => {
    //joins the directory name with the route
    const notesHTMLPath = path.join(__dirname, '/notes.html');
    const indexHTMLPath = path.join(__dirname, '/index.html');

    app.get('/api/notes', (req, res) => res.json(db));

    // Use fs.readFile() method to read the file
    fs.readFile('db/db.json', 'utf8', function (err, data) {
        const notes = JSON.parse(data);
        // notes.push();
    });

    app.post('/api/notes', (req, res) => {
        let newNote = req.body; //new note title and text are stored in this variable
        console.log(newNote);
    });

    app.get('/notes', (req, res) => res.sendFile(notesHTMLPath)); //sends the notes.html to the server
    app.get('*', (req, res) => res.sendFile(indexHTMLPath)); //routes other than specific routes forwarded to index.html route using *

    // saveButtonEl.addEventListener('click', app);
}
