
var friends = require("../data/friends");

module.exports = function(app) {
// displays JSON of all possible friends
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

// handles incoming survey results
// handles compatibility logic
app.post("/api/friends", function(req, res) {

    var newFriend = req.body;

    friends.push(newFriend);

    res.json(newFriend);
    var compatibility = 0;
    for (var i = 0; i<friends.length - 1; i++) {
        console.log(friends.length);
        
        var bestfriend = friends[i];
        var compatibilityScore = 0;
        for (var z = 0; z<10; z++) {
            console.log("z= " + z);
            console.log("i = " + i);
            //console.log("name" + friends[i].name + " " + Math.abs(friends[i].scores[z] - newFriend.scores[z]));
            compatibilityScore += Math.abs(parseInt(friends[i].scores[z]) - parseInt(newFriend.scores[z]));
            console.log("compatibility score = " + compatibilityScore);
        };
        if (compatibilityScore < compatibility) {
            console.log("compatibility = " + compatibility);
            compatibility = compatibilityScore;
            bestfriend = friends[i];
            console.log(bestfriend.name);
        } else {
            compatibilityScore = 0;
        }
    }
});
}
