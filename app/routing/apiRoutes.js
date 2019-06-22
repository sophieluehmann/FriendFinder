
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
});
}
