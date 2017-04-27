var http = require('http');

// Create a Web Server
var server = http.createServer(function(req, res) {
    console.log(req.url); // log the request url
    // When the callback is fired
    // Node expect a respone back to the browser
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<html><body><h1>" + req.url + "</h1></body></html>");
    res.end('\nHello World\n');
});

// Listen to a free port on the machine
server.listen(3000);