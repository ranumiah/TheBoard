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

        app.post("/newCategory", function (req, res) {
            // The body will contain the object we're interested
            var categoryName = req.body.categoryName;
            data.createNewCategory(categoryName, function (err) {
                if (err) {
                    // Handle Error
                    console.log(err);
                    res.redirect("/");
                } else {
                    res.redirect("/notes/" + categoryName);
                }
            });
        });
    };
})(module.exports); // Passing in this exports method and renaming it to homeController