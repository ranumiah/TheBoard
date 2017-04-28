var http = require('http');
var express = require("express");
var app = express(); // This will return a singleton object that represent our web application.
//var ejsEngine = require("ejs-locals");

// Setup the View Engine

// Vash Example
app.set("view engine", "vash");

// EJS example
//app.engine("ejs", ejsEngine); // Support master pages
//app.set("view engine", "ejs"); // ejs view engine

// Jade Engine Example
//app.set("view engine", "jade");


// This is like MVC action methods in the Controller class
app.get("/", // This is what URL's is being hit
    // Here is the code to run when the above url is hit
    function(req, res) {
        //res.send("<html><body><h1>Express</h1></body></html>"); // Use View Engine to render

        //res.render("jade/index", { title: "Express + Jade" });
        //res.render("ejs/index", { title: "Express + EJS" });
        res.render("vash/index", { title: "Express + Vash" });
    });

app.get("/api/users",
    function (req, res) {
        res.set({ "Content-Type": "application/json" });
        res.send({name:"Foo", isValid: "true", group: "Admin"});
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