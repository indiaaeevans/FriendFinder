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
  		console.log(res.json);

	 	var totalDifference = 0;
		var matchesArray = [];

		// for (let i = 0; i < friends.length; i++){
	 // 		for (let q = 0; q < newUser.survey.length; i++){
	 // 			totalDifference += newUser.survey[q] - friends[i].survey[q];
	 // 		}
	 // 		matchesArray.push(totalDifference);
	 // 		console.log(totalDifference);
	 // 		totalDifference = 0;
	 // 	}
		res.json(true);
	});

	 // compare the difference between current user's scores against those from other users, 
	 // question by question. Add up the differences to calculate the totalDifference (absolute value)

	 // The closest match will be the user with the least amount of difference
};