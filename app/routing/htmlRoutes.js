// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// HTML ROUTES
module.exports = function(app) {

	// GET Route to `/survey` will display the survey page
	app.get("/survey", function(req, res) {
    	res.sendFile(path.join(__dirname, "/../public/survey.html"));
  	});

	// USE route that will default to home page if no matching route is found
   app.use(function(req, res) {
       res.sendFile(path.join(__dirname, "/../public/home.html"));
   });
};