var friends = require("../app/data/friends");


module.exports = function(app) {


app.get("/api/friends", function (request, response) {
    response.json(friends);
    friends.push(request.body)
    
});

// app.get("/api/")


























}