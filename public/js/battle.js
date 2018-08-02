// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5rkNkaEq-wJHH13pbUdZrhZtkyhdW6bg",
    authDomain: "pokemon-f322e.firebaseapp.com",
    databaseURL: "https://pokemon-f322e.firebaseio.com",
    projectId: "pokemon-f322e",
    storageBucket: "pokemon-f322e.appspot.com",
    messagingSenderId: "1092444110379"
};
firebase.initializeApp(config);

var database = firebase.database();

var playerOneExists = false;
var playerTwoExists = false;
var playerOnehealth = 100;
var playerTwohealth = 100;
var gameOn = false;
var p1name;
var p2name;
var poke1name;
var poke2name;
var win;
var player = ["Tom", "Diana", "Maria", "Aron"];
var pokemons = ["sprit1", "sprite2", "sprite3", "sprite4"];


//updating option values
var userName = document.getElementById("username");
for (var i = 0; i < player.length; i++) {
    var alluser = document.createElement("option");
    alluser.textContent = player[i];
    userName.appendChild(alluser);
};


var pokemon = document.getElementById("pokemon");
for (var i = 0; i < pokemons.length; i++) {
    var allpokemon = document.createElement("option");
    allpokemon.id = "pokeid";
    allpokemon.textContent = pokemons[i];
    pokemon.appendChild(allpokemon);
};



$("#choose").on("click", function () {
    if (!playerOneExists && !playerOneExists && !gameOn) {
        myFunction();
    } else if (!playerTwoExists) {
        myFunction();
    } else { alert("Battle field is full. Try again later") }
});



function myFunction() {
    var x = document.getElementById("username").selectedIndex;
    var y = document.getElementById("pokemon").selectedIndex;

    if (!playerOneExists) {
        playerOneExists = true;
        p1name = document.getElementsByTagName("option")[x].value;
        //  poke1name=document.getElementsByTagName("")[y].value;
        poke1name = pokemons[y - 1];

        database.ref().set({
            p1: "health :" + playerOnehealth,
            p2: "health :" + playerTwohealth
        });

        $("#name1").html(p1name);
        $("#p1").html("<button>" + poke1name + "</button>");

    } else if (!playerTwoExists) {
        playerTwoExists = true;
        p2name = document.getElementsByTagName("option")[x].value;
        poke2name = pokemons[y - 1];
        $("#name2").html(p2name);
        $("#p2").html("<button>" + poke2name + "</button>");

        database.ref().set({
            p1: "health :" + playerOnehealth,
            p2: "health :" + playerTwohealth
          });

        game()
    }

}


function game() {
    if (playerOneExists && playerTwoExists) {
        gameOn = true;
        displayres();

    } else {
        myFunction();
    }
};

function logic() {
    $("#p1").on("click", function () {
        playerTwohealth--;
        console.log(playerTwohealth);
        database.ref().set({
            p1: "health :" + playerOnehealth,
            p2: "health :" + playerTwohealth
          });
        displayres();
        gameOver();
    });


    $("#p2").on("click", function () {
        playerOnehealth--;
        console.log(playerOnehealth);
        database.ref().set({
            p1: "health :" + playerOnehealth,
            p2: "health :" + playerTwohealth
        });
        displayres();
        gameOver();

    });
}

function displayres() {
    $("#oneplayer").text(p1name + " health :" + playerOnehealth);
    $("#twoplayer").text(p2name + " health :" + playerTwohealth);
};


function gameOver() {
    if (playerOnehealth == 0) {
        alert(p2name + " win");
        restartGame();
    } else if (playerTwohealth == 0) {
        alert(p1name + " win");
        restartGame();
    }
}

function restartGame() {
    $("#p1").empty();
    $("#p2").empty();
    playerOneExists = false;
    playerTwoExists = false;
    playerOnehealth = 100;
    playerTwohealth = 100;
    p1name = "";
    p2name = "";
    $("#name2").html(p2name);
    $("#name1").html(p1name);
    $("#oneplayer").text(p1name + " health :" + playerOnehealth);
    $("#twoplayer").text(p2name + " health :" + playerTwohealth);
    poke1name = "";
    $("#p1").html(poke1name);
    poke2name = "";
    $("#p2").html(poke2name);

}

logic();
