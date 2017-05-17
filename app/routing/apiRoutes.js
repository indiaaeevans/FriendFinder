var friends = require("../data/friends.js");


module.exports = function(app) {

  // GET route with the url `/api/friends` will display a JSON of all possible friends.
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {

    return res.json(friends);

  });


// ---------------------------------------------------------------------------
// Create new friend - takes in JSON input
// This route will also be used to handle the compatibility logic.

      // $.post("/api/friends", newuser).done(function(data) {
      //   console.log(data);
      //   alert("Adding new user...");
      // });

	// app.post("/api/friends", function(req, res) {
 //  		var newFriend = req.body;
 //  		console.log(newFriend);
 //  		res.json(newFriend);
	// });

	 // compare the difference between current user's scores against those from other users, 
	 // question by question. Add up the differences to calculate the totalDifference (absolute value)

	 // var totalDifference = 0;

	 // for (let i = 0; i < friends.length; i++){
	 // 	for (let q = 0; q < newuser.survey.length; i++){
	 // 		totalDifference += newuser.survey[q] - friends[i].survey[q];
	 // 	}
	 // }
	 // The closest match will be the user with the least amount of difference
}