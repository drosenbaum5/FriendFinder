var friends = require("../app/data/friends");


module.exports = function(app) {


app.get("/api/friends", function (request, response) {
    response.json(friends);
    
    
});

app.post("/api/friends", function (request, response) {
    
    console.log(request.body.scores);

    var user = request.body;

    for(var i = 0; i < user.scores.length; i++) {

        user.scores[i] = parseInt(user.scores[i]);
    }
    
     var bestFriend = 0;
     var minDifference = 40;
    
    

     for(var i = 0; i < friends.length; i++) {

        var sumDifference = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(user.scores[j] - friends[i].scores[j])
            sumDifference += difference;
        }

        if(sumDifference < minDifference) {
            bestFriend = i;
            minDifference = sumDifference;

        }
     }

     friends.push(user);
    // response.push(req.body);
    // res.json(true);
    
    response.json(friends[bestFriend]);
});

 } 

