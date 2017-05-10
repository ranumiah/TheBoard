// data.<property_name/method_name> =
// all of those are exposing either a method or property to whoever has access to data object
(function (data) {

    var seedData = require("./seedData");
    var database = require("./database");

    data.getNoteCategories = function (next) {

        next(null, seedData.initialNotes);
    };

    data.getNoteCategories = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err, null);
            } else {
                db.notes.find().sort({ name: 1 }).toArray(function (err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    data.createNewCategory = function (categoryName, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                db.notes.find({ name: categoryName }).count(function (err, count) {

                    if (err) {
                        next(err);
                    } else {

                        if (count != 0) {
                            next("Category already exists");
                        } else {
                            var cat = {
                                name: categoryName,
                                notes: []
                            };
                            db.notes.insert(cat, function (err) {
                                if (err) {
                                    next(err);
                                } else {
                                    next(null);
                                }
                            });
                        }
                    }
                });
            }
        });
    };

    data.getNotes = function (categoryName, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                // This is case sensitive
                db.notes.findOne({ name: categoryName }, next);
            }
        });
    };

    // This actually create a new object inside of an existing object    
    data.addNote = function (categoryName, noteToInsert, next) {
        database.getDb(function (err, db) {
            if (err) {
                next(err);
            } else {
                // Therefore we do an update and not the logically Insert
                db.notes.update({ name: categoryName }, { $push: { notes: noteToInsert } }, next);
            }
        });
    };

    // Method Delcared
    function seedDatabase() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Failed to seed database: " + err);
            } else {
                // test to see if data exists
                db.notes.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve database count");
                    } else {
                        if (count == 0) {
                            console.log("Seeding the Database...");
                            seedData.initialNotes.forEach(function (item) {
                                db.notes.insert(item, function (err) {
                                    if (err) console.log("Failed to insert note into database");
                                });
                            });
                        } else {
                            console.log("Database already seeded");
                        }
                    }
                });
            }
        });
    }

    // Method excuted
    seedDatabase();

})(module.exports);