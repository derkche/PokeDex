// Dependencies
// =============================================================

var db = require("../models");

module.exports = function (app) {
    // Post route that add new user into users db

    app.post("/api/users", function (req, res) {
        console.log(req.body.name);
        
        db.User.create({
            name: req.body.name,
            pokemon1: req.body.pokemon1,
            pokemon2: req.body.pokemon2,
            pokemon3: req.body.pokemon3,
            pokemon4: req.body.pokemon4,
            pokemon5: req.body.pokemon5,
            pokemon6: req.body.pokemon6
        }).then(function(results){
            res.end();
        });
    });

    // Get user route to display users and pokemon.
    app.get("/api/users", function(req, res){
        db.User.findAll({}).then(function(results){
            res.json(results);
        });
    });


    //Delete route that delete user from the users db

    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });


    //Put route for updating user

    app.put("/api/users", function (re, res) {
        db.User.update({
            name: req.body.name,
            favorite_pokemon1: req.body.favorite_pokemon1,
            favorite_pokemon2: req.body.favorite_pokemon2,
            favorite_pokemon3: req.body.favorite_pokemon3,
            favorite_pokemon4: req.body.favorite_pokemon4,
            favorite_pokemon5: req.body.favorite_pokemon5,
            favorite_pokemon6: req.body.favorite_pokemon6,
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUser) {
                res.json(dbUser);
            });
    });
};