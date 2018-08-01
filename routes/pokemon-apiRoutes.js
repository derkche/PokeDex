// Dependencies
// =============================================================

var db = require("../models");


// Routes
// =============================================================

module.exports = function (app) {
    // Search for all pokemon then provides JSON  

    app.get("/api/pokemon", function (req, res) {
        db.Pokemon.findAll({}).then(function (results) {
            res.json(results);
        });

    });

    //Searches for one pokemon

    app.get("/api/pokemon/:name", function (req, res) {
            db.Pokemon.find({
            where: { name: req.params.name }
        }).then(function (data) {
            res.json(data);
        });
        
    });


    //Get route for returning a specific category of pokemon

    app.get("/api/pokemon/type1/:type1", function (req, res) {
        db.Pokemon.findAll({}).then(function (result) {
            res.json(result)
        }, {
                where: { type1: req.params.category }
            });
    });

};