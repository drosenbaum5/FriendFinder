// Dependencies
var express = require("express");


// Create express app instance
var app = express();


// Port for application
// process.env.PORT set by Heroku
var PORT = process.env.PORT || 8080;


// Set up express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})