// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================

var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function(app){
    // HTML GET Requests
  // ---------------------------------------------------------------------------
app.get("/pokedex", function(req, res){
    res.sendFile(path.join(__dirname, "../public/pokedex.html"));
});

app.get("/registration", function(req, res){
    res.sendFile(path.join(__dirname, "../public/registration.html"));
});

app.get("/users", function(req, res){
    res.sendFile(path.join(__dirname, "../public/users.html"));
});

//If no matching route is found default to home

app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

};