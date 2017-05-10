﻿// notesController.js
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
    };
})(module.exports);