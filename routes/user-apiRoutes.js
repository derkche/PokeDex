// Dependencies
// =============================================================

var db = require("../models");

module.exports = function (app) {
    // Post route that add new user into users db

    app.post("/api/users", function (req, res) {
        db.Users.create(req.body).then(function (dbUser) {
            res.json(dbUser);
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