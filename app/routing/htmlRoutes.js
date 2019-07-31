
var path = require("path");

module.exports = function(app) {

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
  
//default route, leads to home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../data/friends.js"));
});


app.get("/match", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/match.html"))
});

};
