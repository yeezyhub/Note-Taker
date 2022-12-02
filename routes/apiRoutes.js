// Dependencies
const fs = require('fs');
const path = require('path');

//npm package that helps with having unique id
const { v4: uuidv4 } = require('uuid');

//Routing
module.exports = app => {

    fs.readFile('db/db.json', 'utf8', function (err, data) {

        if (err) throw err; //if it gives error, throws out

        let notes = JSON.parse(data); //JSON to string

        //API GET Request
        app.get("/api/notes", (req, res) => res.json(notes)); 

        //API POST Request
        app.post("/api/notes", (req, res) => {
            let newNote = req.body; //gets the new note
            newNote.id = uuidv4(); //unique id is given to each note
            notes.push(newNote); //pushes it to the note database
            res.json(notes); //automatically updates the list on the left
            updateFile(); //writes the new note to the db.json file
            return console.log("Successfully added a new note: " + newNote.title);
        });

        // Retrieves a note with specific id
        app.get("/api/notes/:id", (req, res) => {
            // display json for the notes array indices of the provided id
            res.json(notes[req.params.id]);
        });

        // Deletes a note with specific id
        app.delete("/api/notes/:id", (req, res) => {

            //deletes the specific note using their IDs
            notes = notes.filter(function (obj) {
                return obj.id != req.params.id;
            });

            res.json(notes); //automatically updates the list on the left
            console.log("Successfully deleted the note with id " + req.params.id);
        });

        //updates the json file whenever a note is added
        function updateFile() {
            fs.writeFile("./db/db.json", JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;
            });
        }
    })
}
