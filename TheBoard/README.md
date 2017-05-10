# TheBoard


### What is Node.JS
Platform for executing JavaScript based on non-blocking I/O, event-driven model that enables fast, scalable network applications.

Able to write server-side code with the same sort of templating engines, business logic, data access that you would build in ASP.net and its associated technologies like the BPF and web API and MVC.  Therefore it is a different kind of server and in many ways a much simpler than server than using something like IIS. ASP.NET Core and Katana is more close to NodeJS.

NodeJS is server-side JavaScript for Network Applications which support the following out of the box:
* Supports Modular JavaScript  Dependendency and Package Management
* Encourages non-blocking (asynchronous) code as the default behaviour
* HTTP, Networking, and Web Sockets are 1st class citizens
* NodeJS is a low-lev, fast platform, which is not written in JavaScript. However it is an enviroment for executing JavaScript

##### NodeJS is a simple but powerful web server environment

##### NodeJS Is Asynchronous By Nature. You can accopmlish this in ASP.Net but it's not the default behavior.

### Mapping the Nomenclature of NodeJS and .NET

IIS ==> Node.exe

    Instead of having an OS level of service, we're simply have an executable that knows how to host JavaScript in order to service web requests.  It is possible to get other behaviour available in ISS like handling certificates and redirection and all of that. But Node is a much simpler and lighter version of this.

C#  ==> JavaScript

    All the client code in NodeJS is JavaScript.

EF/SQL Server   ==> MongoDB or other Database

    The database driver inside of Node is usually used in NoSql or Document Store databases. However you can still use the traditional SQL databases

ASP.NET Web Forms   ==> Express + EJS

    EJS is a markup language that allows you to template your views like web forms

ASP.NET MVC/Razor   ==> Express + Jade/Razor

    Jade/Razor is a different templating engine still using the Express framework

ASP.NET Web API ==> Express

    Express the web framework allows you to write much like ASP.NET Web API.

AngularJS/Ember/KnockoutJS  ==> AngularJS/Ember/KnockoutJS

    Same client-side library to do templating and data binding and module creating and navigation etc...

SignalR ==> Socket.io WebSockets

     Socket.io is a way to get the same sort of rich connection behaviour that you're used to in SignalR

### JavaScript In NodeJS

All JavaScript is executed under Google's V8 Engine therefore it's a predictable execution model. Unlike writing a JavaScript in the Browser as they have to deal with different environment. V8 supports Just-In-Time (JIT) and Optimizing Compiler to allow the JavaScript to run really fast. Therefore V8 is like the CLR in .NET code.

#### How to run JavaScript using NodeJS
> node [AppStartFileName].js

This empashise Node is just an execution engine for JavaScript files.

#### ECMA Script (ES)

Since the V8 uses the ECMAScript 6 as the standard.

	
##### ECMAScript = ES:

* ECMAScript is a Standard for scripting languages.
* Languages like Javascript are based on the ECMAScript standard.
* ECMA Standard is based on several originating technologies, the most well known being JavaScript (Netscape) and JScript (Microsoft).
* ECMA means European Computer Manufacturer’s Association

##### JavaScript = JS:

* JavaScript is the most popular implementation of the ECMAScript Standard.
* The core features of Javascript are based on the ECMAScript standard,  but Javascript also has other additional features that are not in the ECMA specifications/standard.
* ActionScript and JScript are other languages that implement the ECMAScript.
* JavaScript was submitted to ECMA for standardization but due to trademark issues with the name Javascript the standard became called ECMAScript.
* Every browser has a JavaScript interpreter.

##### ES5 = ECMAScript 5:

* ES5 is a version of the ECMAScript (old/current one).
* ES5 is the JavaScript you know and use in the browser today.
* ES5 does not require a build step (transpilers) to transform it into something that will run in today's browsers.
* ECMAScript version 5 was finished in December 2009,  the latest versions of all major browsers (Chrome, Safari, Firefox, and IE)  have implemented version 5.
* Version 5.1 was finished in June, 2011.

##### ES6 = ECMAScript 6 = ES2015 = ECMAScript 2015:

* ES2015 is a version of the ECMAScript (new/future one).
* Officially the name ES2015 should be used instead of ES6.
* ES6 will tackle many of the core language shortcomings addressed in  TypeScript and CoffeeScript.
* ES6 is the next iteration of JavaScript, but it does not run in today's browsers.
* There are quite a few transpilers that will export ES5 for running in browsers.

##### BabelJS:

* BabelJS is the most popular transpiler that transforms new JavaScript ES6 to Old JavaScript ES5.
* BabelJS makes it possible for writing the next generation of JavaScript today (means ES2015).
* BabelJS simply takes ES2015 file and transform it into ES5 file.
* Current browsers versions can now understand the new JavaScript code (ES2015), even if they don't yet support it.

##### TypeScript and CoffeeScript:

* Both provides syntactic sugar on top of ES5  and then are transcompiled into ES5 compliant JavaScript. 
* You write TypeScript or CoffeeScript then the transpiler transforms it into ES5 JavaScript.

### NPM

> `npm install underscore`

This will install underscore Package that can be found at [npmjs](https://www.npmjs.com/)

It creates a node_modules like nuget thus it is something that is generally ommited from source control.

>`npm install underscore@1.6.0`

This will install the specific version of the pacakge

> `npm install underscore -g`

This will install underscore global on the machine

> `npm install underscore --save`

This will save it as a dependancy in Package.json "dependencies": {}

> `npm install underscore --save-dev`

This will save it as a dependancy in Package.json under "devDependencies": {}
This means that these pacakages are only required during development and not to be use during production release

> `npm uninstall underscore --save-dev`

Not only will this remove the pacakge it will also update the Package.json as well

> `npm install`

This will install everything inside Package.json going through the whole dependency tree.

> `npm list --depth=0 -g`

This will show you all the packaged installed by *NPM* on your machine and if you take -g it will show all the packaged on the project.  The *--depeth=0* only shows the pacakge name however if you wish to see all the pacakges as well as all dependencies on those pacakages then taking that off will show you a massive tree structure instead of a single line list.

### Dependency Management

CommonJS is used to bring other JavaScript modules (files) within the current scope, which effectively keeps the global scope from being polluted.

The keyword "Require" is needed to bring in another JavaScript Modules i.e.
```JavaScript
require("./msgs.js");
```

In the system each file has access to `module.exports` aliased `exports`. It must be assigned to a variable and then it can be used like and object with properties and methods exposed.

The JavaScript files that are loaded using require can also have thier own require as well. This nested dependency will get loaded.  **The Require functionality loads it and loads it once**. If someone else calls for this object by require function. Then it will get a cached version of it.

Package.json is used to keep track of all the Node Modules dependent for the Project. Using Node Modules the require function can be used like 
```JavaScript
var _ = require("underscore")
```
Node Pacakge Manager has the notion of 3 types od dependencies:
* Require --> Are the ones that it knows I need to run by default
* Optional --> Are the ones that may make my operations a little better
* Development --> They are useful while I'm working on the code and should not hit the Production enviroment.

Also when bringing in dependency modules it is possible those modules can also be dependent on other Node Module for example `npm install express`

*There is no build in **Node** of taking that JavaScript and building something with it, it's simply the matter of reading the package.json that's going to be used when you start up your node project.**

##### View Engine

It is used to render a view instead using magice string of html.

**Jade**
>is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node and browsers.

**EJS***
>"E" is for "effective." EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

**Vash**
>Vash is a template engine that offers a swift flow between code and content using Razor Syntax


#### Node Keywords

**__dirname** is a global object that contains the name of the directory that the executing script resides


### Bower

Bower is also dependency manager like NPM. Bower can be used for any front-end development to manage front-end assets (HTML, CSS & JS) - regardless of the technology used by the back-end. In other words, Bower can, and is, used with RoR (Ruby on Rails), PHP, J2EE, etc. 

NPM, on the other hand, is a package manager specific to the node.js back-end environment.

#### How to install Bower
> `NPM Install bower -g`

As you can see we need NPM to install bower but once that is install we can use power to install front-end packages like

It also creates a bower_components folder where all the packages downloaded and there's bower.json listing all the packages that bower installed like NPM.

#### How to use Bower
> `bower install underscore`

This will install underscore using bower.

>`bower install underscore#1.6.0`

This will install version 1.6.0 of underscore package

#### How to Configure Bower

Bower has a file called **.bowerrc**.  This is used to configure itself and list of all the options can be found [here](https://github.com/bower/spec/blob/master/config.md)

### GruntJS

Grunt is basically a build / task manager written on top of NodeJS.

The way that Grunt works is it looks for a file in the root of the folder it's being run in called gruntfile.js. This isn't a file that's used by Node at all during runtime, it's purely a development asset.

#### Typicall Use Cases

* Use nodemon to monitor change in server code to automatically restart Node
* run tests
* minimize CSS & Javascript
* run JSLint or HInt
* etc

### Accesing Data with Node.js

#### Drivers for Relational DBs

* massive-js
  * MySQL, PostgreSQL
* msnodesql
  * Native tds driver, but difficult to build on Windows
* tedious
  * Pure JavaScript SQL Server but limited functionality
* edge
  * ScriptCS and Node.js interop (to call any .NET code)
* mssql
  * Microsoft SQL Server client for Node.js

#### Pre-requisite

##### Enable SQL Server

>In Sql Server Configuration Manager Ensure Following Are Running/Enabled:
>* SQL Server Services   ==> SQL Server (MSSQLSERVER)    ==> Running
>* SQL Server Network Configuration   ==> TCP/IP    ==> Enabled

##### Create a User

>Open SQL Server Management Stduio and connect to the database server as a sysadmin.

>Right-click on *Database* and select *New Database*. Enter the name of your database and click OK to create the database.

>Right click on *Security* in the left pane, and select *New*, then *Login*.

>Enter the desired user name, and select *SQL Authentication*, then enter the desired user password. Ensure to uncheck the *Enforce password expiration* option.

>Select your new database as the Default database, and click on User Mapping on the left side. Click the check box next to your database, and click the check box next to *db_owner*.

>Lastly, click *OK* to create the login and database user.

#### Example

`npm install mssql`

```Javascript
app.get('/api/sql', function (req, res) {

    var sql = require("mssql");

    sql.close();

    // config for your database
    var config = {
        user: 'userName',
        password: 'myPassword',
        server: 'serverAddress',
        database: 'Northwind',
        // Default port must specify when Named Instance is not set
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
```

#### NoSql Data Stores Differences To Relational

* Document or data strcuture storage
* Hierarchies not relational
* Built to be run in parallel (e.g. Sharding)
* Simple to deploy (usually no installer)
* Transactions support too


### MongoDB

MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy horizontal scalability. MongoDB works on concept of collection and document.

##### Database
Database is a physical container for collections. Each database gets its own set of files on the file system. A single MongoDB server typically has multiple databases.

##### Collection
Collection is a group of MongoDB documents. It is the equivalent of an RDBMS table. A collection exists within a single database. Collections do not enforce a schema. Documents within a collection can have different fields. Typically, all documents in a collection are of similar or related purpose.

##### Document
A document is a set of key-value pairs. Documents have dynamic schema. Dynamic schema means that documents in the same collection do not need to have the same set of fields or structure, and common fields in a collection's documents may hold different types of data.

###### Comparison Table

| RDBMS      | MongoDB          |
|:----------:|:----------------:|
| Database   | Database         |
| Table      | Collection       |
| Row        | Document         |
| Column     | Field            |
| Table Join | Embedded Document|
| Primary Key| _id              |

**_id** is a 12 bytes hexadecimal number which assures the uniqueness of every document. These 12 bytes first 4 bytes for the current timestamp, next 3 bytes for machine id, next 2 bytes for process id of MongoDB server and remaining 3 bytes are simple incremental VALUE.

**MongoDB Environment** is simply self-contain of executables.

**MongoDB Server Start**

    `mongod.exe -dbpath ..\..\..\Data --rest`

This will then allow you to access the DB from web browser.

The path for the admin console is: http://localhost:28017/

The default server path is http://localhost:27017/

**MongoDB Shell**

    `mongo.exe`

| Command         | Function                                      |
|:----------------|:----------------------------------------------|
| show dbs        | Shows the names of the available databases    |
| show collections| Shows the collections in the current databases|
| show users      | Shows the users in the current databases      |
| use <db_name>   | Sets the current datatbase to <db_name>       |

**Backup Database**

    `mongodump.exe --db database_name --collection collection_name`

**Restore Database From Backup**

    `mongorestore.exe --db database_name path_to_bson_file`

#### Example

```Javascript
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
```