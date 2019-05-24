// displays JSON of all possible friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// handles incoming survey results
// handles compatibility logic
app.post("/api/friends", function(req, res) {

    var newFriend = req.body;

    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    friends.push(newFriend);

    res.json(newFriend);
});
 