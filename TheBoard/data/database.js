// database.js
(function (database) {

    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://localhost:27017/theBoard"; // theBoard is the database name
    var theDb = null;

    database.getDb = function (next) {
        if (!theDb) {
            // connect to the database
            mongodb.MongoClient.connect(mongoUrl, function (err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db,
                        notes: db.collection("notes") // this collection is like a table
                    };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }
    }

})(module.exports);