var friends = require("../app/data/friends");


module.exports = function(app) {


app.get("/api/friends", function (request, response) {
    response.json(friends);
    
    
});

app.post("/api/friends", function (request, response) {
    response.push(req.body);
    res.json(true);
    
});

}