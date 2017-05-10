var http = require('http');
var express = require("express");
var app = express(); // This will return a singleton object that represent our web application.
var controllers = require("./controllers"); // this gives access to all the controllers in that folder as long as there's an index.js file in the folder
var flash = require("connect-flash");


//var ejsEngine = require("ejs-locals");

// Setup the View Engine

// Vash Example
app.set("view engine", "vash");

// EJS example
//app.engine("ejs", ejsEngine); // Support master pages
//app.set("view engine", "ejs"); // ejs view engine

// Jade Engine Example
//app.set("view engine", "jade");


//// This is like MVC action methods in the Controller class
//app.get("/", // This is what URL's is being hit
//    // Here is the code to run when the above url is hit
//    function(req, res) {
//        //res.send("<html><body><h1>Express</h1></body></html>"); // Use View Engine to render

//        //res.render("jade/index", { title: "Express + Jade" });
//        //res.render("ejs/index", { title: "Express + EJS" });
//        res.render("vash/index", { title: "Express + Vash" });
//    });


// Opt into Services
app.use(express.urlencoded());
app.use(express.json());
app.use(express.cookieParser()); // All 3 needs to be Opt-In in this order, to be able to use Flash
app.use(express.session({ secret: "MagicSesioon" })); // To use Session we need Cookie Parser
app.use(flash()); // To use Flash we need to use Session


// set the public static resource folder
app.use(express.static(__dirname + "/public"));

// Map the routes
controllers.init(app);

app.get("/api/users",
    function (req, res) {
        res.set({ "Content-Type": "application/json" });
        res.send({ name: "Foo", isValid: "true", group: "Admin" });
    });

app.get('/api/sql', function (req, res) {

    var sql = require("mssql");

    sql.close();

    // config for your database
    var config = {
        user: 'nodeUser',
        password: 'mypassword',
        server: 'DEVWRKSTN00423',
        database: 'Northwind',
        port: 1433
    };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query("SELECT * FROM Customers WHERE CustomerID = 'ALFKI'", function (err, recordset) {

            if (err) console.log(err);

            // send records as a response
            res.send(recordset);

        });
    });
});

// Create a Web Server using EXPRESS
var server = http.createServer(app);

// Listen to a free port on the machine
server.listen(3000);


//// Create a Web Server Not Using EXPRESS
//var server = http.createServer(function(req, res) {
//    console.log(req.url); // log the request url
//    // When the callback is fired
//    // Node expect a respone back to the browser
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.write("<html><body><h1>" + req.url + "</h1></body></html>");
//    res.end('\nHello World\n');
//});

//// Listen to a free port on the machine
//server.listen(3000);