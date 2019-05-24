
// displays survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
  
//default route, leads to home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

