#!/usr/bin/env node
//
// To host a directory files put this file and package.json in it and run:
//  npm install
//  chmod +x file-server.js
//  ./file-server.js
//


//require express and serve-index
var express = require("express");
var serveIndex = require('serve-index')

//listen on port
var port = 3080;

//static files in same dir
var docroot = "";

//instantiate express
var app = express();

//serve all content starting at this directory
app.use('/', serveIndex(__dirname + docroot, {'icons': true}));
app.use(express.static(__dirname + docroot)); 

//start serving content
app.listen(port);

console.log("Server running at http://localhost:" + port);
