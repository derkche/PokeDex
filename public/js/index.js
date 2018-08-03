// Get request for searching for pokemon name
// =======================================================
$("#pokemon_query").on("submit", function (event) {
    event.preventDefault();

    var searchPokemon = $("#pokemon_query [name=myPokemon]").val().trim();

    $.ajax("api/pokemon/" + searchPokemon, {
        type: "GET"
    }).then(
        function (res) {
            console.log("Searching for " + searchPokemon);
            console.log(res.name);
            console.log(res.type1);
            console.log(res.image);

            $("#pokemon_query")[0].reset();
            $(".searchField").attr("placeholder", res.number+" | "+res.name); //sets the search box placeholder to the pokemons name

            // Setting pokemon id for toggle function
            // =======================================================
            pokemonId = res.number;
            console.log(pokemonId);

            // Displaying the image results for this pokemon search.
            // =======================================================
            var pokemon_display = $("<div>");
            pokemon_display.addClass("pokemon_display");
            pokemon_display.append("<img style='height:47vh;left: 17vw;top: 25vh;position: fixed;' src='" + res.image + "'>");

            $(".pokemon_display").html(pokemon_display);

            // Displaying the type 1 result for this pokemon search.
            // =======================================================
            var type1 = $("<div>");
            type1.addClass("type1");
            type1.append("<h3>" + res.type1 + "</h3>");

            $(".type1").html(type1);

            // Displaying the type 2 result for this pokemon search.
            // =======================================================
            var type2 = $("<div>");
            type2.add("type2");
            type2.append("<h3>" + res.type2 + "</h3>");

            $(".type2").html(type2);

            // Displaying the chart info for this pokemon search.
            // =======================================================
            var ctx = document.getElementById("myChart");

            var myChart = new Chart(ctx, {
                type: "radar",
                data: {
                    labels: ["HP", "ATK", "DEF", "SP_ATK", "SP_DEF", "SPD"],
                    datasets: [{
                        label: 'Pokemon Stats',
                        data: [res.hp, res.attack, res.defense, res.special_attack, res.special_defense, res.speed],
                        backgroundColor: [
                            'rgba(255, 0, 0)'
                        ],
                        borderColor: [
                            'rgba(192,47,20)'
                        ],
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(255,255,255)',
                        pointBorderColor: 'rgba(0,0,0)',

                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scale: {
                        ticks: {
                            display: false,
                            min: 0,
                            max: 150
                        },
                        pointLabels: {
                            fontSize: 20
                        },
                        gridLines: {
                            lineWidth: 1.5,
                            color: 'rgba(0,0,0,.2'
                        }
                    }

                }
            });
        }
    );
});

// Left toggle down one pokemon id.
// =======================================================

var pokemonId = 0;

$("#left-toggle").on("click", function (event) {
    if (pokemonId === 1) {
        return
    }
    pokemonId--;

    $.ajax("api/id/" + pokemonId, {
        type: "GET"
    }).then(
        function (res) {
            $("#pokemon_query")[0].reset();
            $(".searchField").attr("placeholder", res.number+" | "+res.name); //sets the search box placeholder to the pokemons name

            console.log("Toggle test: " + res);

            // Setting pokemon id for toggle function
            // =======================================================

            console.log(pokemonId);

            // Displaying the image results for this pokemon search.
            // =======================================================
            var pokemon_display = $("<div>");
            pokemon_display.addClass("pokemon_display");
            pokemon_display.append("<img style='height:47vh;left: 17vw;top: 25vh;position: fixed;' src='" + res.image + "'>");

            $(".pokemon_display").html(pokemon_display);

            // Displaying the type 1 result for this pokemon search.
            // =======================================================
            var type1 = $("<div>");
            type1.addClass("type1");
            type1.append("<h3>" + res.type1 + "</h3>");

            $(".type1").html(type1);

            // Displaying the type 2 result for this pokemon search.
            // =======================================================
            var type2 = $("<div>");
            type2.add("type2");
            type2.append("<h3>" + res.type2 + "</h3>");

            $(".type2").html(type2);

            // Displaying the chart info for this pokemon search.
            // =======================================================
            var ctx = document.getElementById("myChart");

            var myChart = new Chart(ctx, {
                type: "radar",
                data: {
                    labels: ["HP", "ATK", "DEF", "SP_ATK", "SP_DEF", "SPD"],
                    datasets: [{
                        label: 'Pokemon Stats',
                        data: [res.hp, res.attack, res.defense, res.special_attack, res.special_defense, res.speed],
                        backgroundColor: [
                            'rgba(255, 0, 0)'
                        ],
                        borderColor: [
                            'rgba(192,47,20)'
                        ],
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(255,255,255)',
                        pointBorderColor: 'rgba(0,0,0)',

                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scale: {
                        ticks: {
                            display: false,
                            min: 0,
                            max: 150
                        },
                        pointLabels: {
                            fontSize: 20
                        },
                        gridLines: {
                            lineWidth: 1.5,
                            color: 'rgba(0,0,0,.2'
                        }
                    }
                }
            });
        }
    );
});

// Right toggle up one pokemon id.
// =======================================================
$("#right-toggle").on("click", function (event) {
    if (pokemonId === 151) {
        return
    }
    pokemonId++;

    $.ajax("api/id/" + pokemonId, {
        type: "GET"
    }).then(
        function (res) {
            $("#pokemon_query")[0].reset();
            $(".searchField").attr("placeholder", res.number+" | "+res.name); //sets the search box placeholder to the pokemons name

            console.log("Toggle test: " + res);

            // Setting pokemon id for toggle function
            // =======================================================

            console.log(pokemonId);

            // Displaying the image results for this pokemon search.
            // =======================================================
            var pokemon_display = $("<div>");
            pokemon_display.addClass("pokemon_display");
            pokemon_display.append("<img style='height:47vh;left: 17vw;top: 25vh;position: fixed;' src='" + res.image + "'>");

            $(".pokemon_display").html(pokemon_display);

            // Displaying the type 1 result for this pokemon search.
            // =======================================================
            var type1 = $("<div>");
            type1.addClass("type1");
            type1.append("<h3>" + res.type1 + "</h3>");

            $(".type1").html(type1);

            // Displaying the type 2 result for this pokemon search.
            // =======================================================
            var type2 = $("<div>");
            type2.add("type2");
            type2.append("<h3>" + res.type2 + "</h3>");

            $(".type2").html(type2);

            // Displaying the chart info for this pokemon search.
            // =======================================================
            var ctx = document.getElementById("myChart");

            var myChart = new Chart(ctx, {
                type: "radar",
                data: {
                    labels: ["HP", "ATK", "DEF", "SP_ATK", "SP_DEF", "SPD"],
                    datasets: [{
                        label: 'Pokemon Stats',
                        data: [res.hp, res.attack, res.defense, res.special_attack, res.special_defense, res.speed],
                        backgroundColor: [
                            'rgba(255, 0, 0)'
                        ],
                        borderColor: [
                            'rgba(192,47,20)'
                        ],
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(255,255,255)',
                        pointBorderColor: 'rgba(0,0,0)',

                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scale: {
                        ticks: {
                            display: false,
                            min: 0,
                            max: 150
                        },
                        pointLabels: {
                            fontSize: 20
                        },
                        gridLines: {
                            lineWidth: 1.5,
                            color: 'rgba(0,0,0,.2'
                        }
                    }
                }
            });
        }
    );
});


$(document).ready(function () {
    if (window.location.href.split("/").pop() == "pokedex.html") {

        pokemonId++;

        $.ajax("api/id/" + pokemonId, {
            type: "GET"
        }).then(
            function (res) {
                $(".searchField").attr("placeholder", res.number+" | "+res.name); //sets the search box placeholder to the pokemons name

                console.log("Toggle test: " + res);

                // Setting pokemon id for toggle function
                // =======================================================

                console.log(pokemonId);

                // Displaying the image results for this pokemon search.
                // =======================================================
                var pokemon_display = $("<div>");
                pokemon_display.addClass("pokemon_display");
                pokemon_display.append("<img style='height:47vh;left: 17vw;top: 25vh;position: fixed;' src='" + res.image + "'>");

                $(".pokemon_display").html(pokemon_display);

                // Displaying the type 1 result for this pokemon search.
                // =======================================================
                var type1 = $("<div>");
                type1.addClass("type1");
                type1.append("<h3>" + res.type1 + "</h3>");

                $(".type1").html(type1);

                // Displaying the type 2 result for this pokemon search.
                // =======================================================
                var type2 = $("<div>");
                type2.add("type2");
                type2.append("<h3>" + res.type2 + "</h3>");

                $(".type2").html(type2);

                // Displaying the chart info for this pokemon search.
                // =======================================================
                var ctx = document.getElementById("myChart");

                var myChart = new Chart(ctx, {
                    type: "radar",
                    data: {
                        labels: ["HP", "ATK", "DEF", "SP_ATK", "SP_DEF", "SPD"],
                        datasets: [{
                            label: 'Pokemon Stats',
                            data: [res.hp, res.attack, res.defense, res.special_attack, res.special_defense, res.speed],
                            backgroundColor: [
                                'rgba(255, 0, 0)'
                            ],
                            borderColor: [
                                'rgba(192,47,20)'
                            ],
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(255,255,255)',
                            pointBorderColor: 'rgba(0,0,0)',

                        }]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scale: {
                            ticks: {
                                display: false,
                                min: 0,
                                max: 150
                            },
                            pointLabels: {
                                fontSize: 20
                            },
                            gridLines: {
                                lineWidth: 1.5,
                                color: 'rgba(0,0,0,.2'
                            }
                        }
                    }
                });
            }
        );
    }
});


// User Creation to POST the user data and pokemon roster to the database.
// =======================================================
$("#user_creation").on("submit", function (event){
    event.preventDefault();

    var createUser = {
        name: $("#user_creation [name=username]").val().trim(),
        pokemon1: $("#user_creation [name=myPokemon1]").val().trim(),
        pokemon2: $("#user_creation [name=myPokemon2]").val().trim(),
        pokemon3: $("#user_creation [name=myPokemon3]").val().trim(),
        pokemon4: $("#user_creation [name=myPokemon4]").val().trim(),
        pokemon5: $("#user_creation [name=myPokemon5]").val().trim(),
        pokemon6: $("#user_creation [name=myPokemon6]").val().trim()
    };
    console.log(createUser);

    $.ajax("api/users", {
        type: "POST",
        data: createUser
    }).then(
        function(){
            console.log("You added user " + createUser.name);
            location.reload();
        }
    );
});

// On page ready get all users to display.
// =======================================================
$(document).ready(function() {
    var users = [];
    if (window.location.href.split("/").pop() == "users.html"){
        console.log("This if statement is working!")
        $.ajax("api/users", {
            type: "GET"
        }).then(function(res){

            users = [];  
            for(i = 0; i < res.length; i++){
                users.push({
                    name: res[i].name,
                    pokemon1: res[i].pokemon1,
                    pokemon2: res[i].pokemon2,
                    pokemon3: res[i].pokemon3,
                    pokemon4: res[i].pokemon4,
                    pokemon5: res[i].pokemon5,
                    pokemon6: res[i].pokemon6
                });
            }

            console.log(users);
            var display_users = $("<div>");
            display_users.addClass("display_users");

            var select = $("<select id=change style='width:100px; font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'>");
            for(i = 0; i < users.length; i++){
                select.append("<option value='" + users[i].name + "'>" + users[i].name + "</option>");
            }
            
            display_users.append(select);

            $("#display_users").html(display_users);


            
        });

        $("#display_users").on("change", "#change", currentValue);

        function currentValue(){
            var display_users = $($(".display_users")[0]);

            var selected = $("select option:selected")[0];

            console.log("SELECTED: ", selected)

            for(i = 0; i < users.length; i++){
                if (users[i].name == $(selected).val()){
                    var display_pokemon = $("<div>");
                    display_pokemon.append("<p style='background-color: grey; outline-style:solid; outline-color:darkgrey; font-family: Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'>" + users[i].pokemon1 + "</p>");
                    display_pokemon.append("<p style='background-color: grey; outline-style:solid; outline-color:darkgrey; font-family: Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'>" + users[i].pokemon2 + "</p>");
                    display_pokemon.append("<p style='background-color: grey; outline-style:solid; outline-color:darkgrey; font-family: Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'>" + users[i].pokemon3 + "</p>");
                    display_pokemon.append("<p style='background-color: grey; outline-style:solid; outline-color:darkgrey; font-family: Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'>" + users[i].pokemon4 + "</p>");
                    display_pokemon.append("<p style='background-color: grey; outline-style:solid; outline-color:darkgrey; font-family: Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'>" + users[i].pokemon5 + "</p>");
                    display_pokemon.append("<p style='background-color: grey; outline-style:solid; outline-color:darkgrey; font-family: Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'>" + users[i].pokemon6 + "</p>");

                    $("#display_pokemon").html(display_pokemon);
               }
            }
        }
    }
});