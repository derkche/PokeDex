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

            $(".searchField").attr("placeholder", res.name); //sets the search box placeholder to the pokemons name

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
            $(".searchField").attr("placeholder", res.name); //sets the search box placeholder to the pokemons name

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
            $(".searchField").attr("placeholder", res.name); //sets the search box placeholder to the pokemons name

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
console.log("window location: " + window.location.href.split("/").pop());

$(document).ready(function () {
    if (window.location.href.split("/").pop() == "pokedex.html") {

        pokemonId++;

        $.ajax("api/id/" + pokemonId, {
            type: "GET"
        }).then(
            function (res) {
                $(".searchField").attr("placeholder", res.name); //sets the search box placeholder to the pokemons name

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

