
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

    var compatibility = 0;
    var bestfriend = friends[0];
    for (var x = 0; x<10; x++) {
       
        compatibility += Math.abs(parseInt(friends[0].scores[x]) - parseInt(newFriend.scores[x]));
        
       
    }
    console.log("initial score = " + compatibility + " matches with " + bestfriend.name);
    for (var i = 1; i<friends.length - 1; i++) {
        console.log(friends.length);
        
        
        var compatibilityScore = 0;
        for (var z = 0; z<10; z++) {
            //console.log("name" + friends[i].name + " " + Math.abs(friends[i].scores[z] - newFriend.scores[z]));
            compatibilityScore += Math.abs(parseInt(friends[i].scores[z]) - parseInt(newFriend.scores[z]));
            console.log("compatibility score = " + compatibilityScore);
        };
        if (compatibilityScore < compatibility) {
            compatibility = compatibilityScore;
            bestfriend = friends[i];
            console.log("compatibility = " + compatibility);
            console.log("new match = " + bestfriend.name);
        } else if (compatibilityScore > compatibility) {
            console.log("compatibility = " + compatibility);
            console.log("best match = " + bestfriend.name);
        }
    }
    res.json(bestfriend);
    friends.push(newFriend);
});
}
