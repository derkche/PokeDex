// Dependencies
// =============================================================

var db = require("../models");


// Routes
// =============================================================

module.exports = function (app) {
    // Search for all pokemons then provides JSON  

    app.get("/api/pokemons", function (req, res) {
        db.Pokemon.findAll({}).then(function (results) {
            res.json(results);
        });

    });

    //Searches for one pokemon

    app.get("api/pokemons/:id", function (req, res) {
        db.Pokemon.find({
            where: { id: req.params.id }
        }).then(function (data) {
            res.json(data);
        });
    });


    //Get route for returning a specific category of pokemon

    app.get("/api/pokemons/category/:category", function (req, res) {
        db.Pokemon.findAll({}).then(function (result) {
            res.json(result)
        }, {
                where: { category: req.params.category }
            });
    });

};