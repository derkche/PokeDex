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

            // Displaying the image results for this pokemon search.
            // =======================================================
            var pokemon_display = $("<div>");
            pokemon_display.addClass("pokemon_display");
            pokemon_display.append("<img src='" + res.image + "'>");

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
                    labels: ["hp", "attack", "defense", "special attack", "special defense", "speed"],
                    datasets: [{
                        label: 'Pokemon Stats',
                        data: [res.hp, res.attack, res.defense, res.special_attack, res.special_defense, res.speed],
                        backgroundColor: [
                            'rgba(233, 234, 239, .2)'
                        ],
                        borderColor: [
                            'rgba(192,47,20)'
                        ],
                        borderWidth: 2,
                        borderDash: [5],
                        pointBackgroundColor: 'rgba(255,255,255)',
                        pointBorderColor: 'rgba(0,0,0)',

                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            });
        }
    );
});


