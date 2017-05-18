var friends = require("../data/friends.js");

module.exports = function(app) {

// GET route with the url `/api/friends` will display a JSON of all possible friends.
// ---------------------------------------------------------------------------
	app.get("/api/friends", function(req, res) {

    	return res.json(friends);

  	});

// ---------------------------------------------------------------------------
// API POST Request
// Create new friend - takes in JSON input
// This route will also be used to handle the compatibility logic.

	app.post("/api/friends", function(req, res) {
		var newUser = req.body;
  		friends.push(newUser);
		res.json(true);
	});
};