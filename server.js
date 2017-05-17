// Dependencies
// =============================================================
var express = require("express"),
	bodyParser = require("body-parser"),
	path = require('path');

// Sets up the Express server
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the server to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// ROUTES
// Provides our server a "map" of how to respond when users visit or request data from various URLs.
// =============================================================
// send static files to the browser
app.use(express.static(path.join(__dirname, 'app/public')));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});