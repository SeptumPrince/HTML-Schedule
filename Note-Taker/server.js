// Dependencies
// ===========================================================
var express = require("express");
var fs = require("fs");

var app = express();
var PORT = 3000;



function writeNote(res, file) {
    fs.writeFile("./db/db.json", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function (req, res) {
    // writeNote()
    // return
});

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function (req, res) {
    return
});


// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete("/api/notes", function (req, res) {
    // return
});

// This code displays the appropriate HTML
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public//notes.html"))
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
