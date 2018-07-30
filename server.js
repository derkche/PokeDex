var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.end.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App listening on PORT localhost:" + PORT);
    });
});