// notesController.js
(function (notesController) {

    var data = require("../data");

    notesController.init = function (app) {

        // This routing: localhost:3000/api/notes/History
        // static url: /api/notes
        // the label :categoryName is a parameter
        app.get("/api/notes/:categoryName", function (req, res) {

            var categoryName = req.params.categoryName;

            data.getNotes(categoryName, function (err, notes) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(notes.notes);
                }
            });
        });

        // Request Body Example: {"note":"A fictional note", "color":"blue"}
        app.post("/api/notes/:categoryName", function (req, res) {

            var categoryName = req.params.categoryName;

            var noteToInsert = {
                note: req.body.note,
                color: req.body.color,
                author: "Shawn Wildermuth"
            };

            data.addNote(categoryName, noteToInsert, function (err) {
                if (err) {
                    res.send(400, "Failed to add note to data store");
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(201, noteToInsert);
                }
            });

        });
    };
})(module.exports);