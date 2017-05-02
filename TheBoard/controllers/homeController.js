// This is a self-executing anonymous function
(function (homeController) {

    var data = require("../data");

    homeController.init = function(app) {

        app.get("/",
            function(req, res) { // All the below happens in a callback
                // next(null, seedData.initialNotes); ==> ../data/index.js
                data.getNoteCategories(function(err, results) {
                    // This will tell the callback to wait till this is finish
                    res.render("vash/index.vash", { title: "The Board", error: err, categories: results });

                });
            });
    };
})(module.exports); // Passing in this exports method and renaming it to homeController