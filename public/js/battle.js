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
    if (!playerOneExists && !playerTwoExists && !gameOn) {
        myFunction();
    } else if (!playerTwoExists) {
        myFunction();
    }
    else {

        $("#textModal").text("Battle-field is full! Please try again later!");
        document.getElementById("modalImg").src = "./assets/images/sorry.jpg";
        $("#myModal").modal("toggle");
    }
});



function myFunction() {
    var x = $("#username").children().filter(":selected")[0];//document.getElementById("username").selected;
    var y = $("#pokemon").children().filter(":selected")[0];///document.getElementById("pokemon").selectedIndex;
    console.log("X: ", x, "Y: ", y);
    if (!playerOneExists) {
        database.ref("/game/playerOne").set({
            playerOneExists: true,
            name: x.value,
            pokemon: y.value,
            playerOnehealth:100
        });

        // playerOneExists = true;
        // p1name = document.getElementsByTagName("option")[x].value;
        // //  poke1name=document.getElementsByTagName("")[y].value;
        // poke1name = pokemons[y - 1];

        // database.ref().set({
        //     p1: "health :" + playerOnehealth,
        //     p2: "health :" + playerTwohealth
        // });

        // $("#name1").html(p1name);
        // $("#p1").html("<button>" + poke1name + "</button>");

    } else if (!playerTwoExists) {
        database.ref("/game/playerTwo").set({
            playerTwoExists: true,
            name: x.value,
            pokemon: y.value,
            // health: playerTwohealth
            playerTwohealth:100
        });

        // playerTwoExists = true;
        // p2name = document.getElementsByTagName("option")[x].value;
        // poke2name = pokemons[y - 1];
        // $("#name2").html(p2name);
        // $("#p2").html("<button>" + poke2name + "</button>");

        // database.ref().set({
        //     p1: "health :" + playerOnehealth,
        //     p2: "health :" + playerTwohealth
        // });

        // game()
    }

}


function game() {
    if (playerOneExists && playerTwoExists) {
        gameOn = true;
    } else {
        myFunction();
    }
};

function logic() {
    $("#p1").on("click", function () {
        playerTwohealth--;
        console.log(playerTwohealth);
        database.ref("/game/playerTwo").update({
            playerTwohealth: playerTwohealth
        });
        gameOver();
    });

   


    $("#p2").on("click", function () {
        playerOnehealth--;
        console.log(playerOnehealth);
        database.ref("/game/playerOne").update({
            playerOnehealth: playerOnehealth
        });
     
        gameOver();

    });
}


function gameOver() {
    // database.ref("/game/playerOne").set({
       
    // });

    if (playerOnehealth == 0) {
        database.ref("/game/playerOne").on("value", function(snapShot){
            var obj = snapShot.val();
        
        if(obj.playerOnehealth == 0){
          playerOneExists = false,
          playerTwoExists = false
        }
        });

        $("#textModal").text(playerTwo.name + " is " + " win");
        document.getElementById("modalImg").src = "./assets/images/win.png";
        $("#myModal").modal("toggle");

        restartGame();
    } else if (playerTwohealth == 0) {
        
        database.ref("/game/playerTwo").on("value", function(snapShot){
            var obj = snapShot.val();
         if(obj.playerTwohealth == 0){
          playerOneExists = false,
          playerTwoExists = false
        }
        
        });
        
      
        $("#textModal").text(playerOne.name + " is " + " win");
        document.getElementById("modalImg").src = "./assets/images/win.png";
        $("#myModal").modal("toggle");
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




database.ref("/game").on("value", function (snapshot) {
   var obj = snapshot.val();
    p1name = obj.playerOnehealth,
    console.log(p1name);
    p2name = obj.playerTwohealth,
    console.log(p2name);
    
   $("#oneplayer").text(snapshot.val().p1name)
   
    $("#twoplayer").text(snapshot.val().p2name)
}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});




database.ref("/game/playerOne").on("value", function (snapshot) {
    if(!snapshot.val()){
        playerOneExists = false;

        database.ref("/game/playerOne").set({
            playerOneExists: false
        });
    }
    else{
        var obj = snapshot.val();

        if(obj.playerOneExists){
            
            $("#name1").html(obj.name);
            $("#p1").html("<button>" + obj.pokemon + "</button>");
            $("#oneplayer").text(obj.name + " health :" + obj.playerOnehealth);
            playerOneExists = true;
            
        }
    }


}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


database.ref("/game/playerTwo").on("value", function (snapshot) {
    if(!snapshot.val()){
        playerTwoExists = false;

        database.ref("/game/playerTwo").set({
            playerTwoExists: false
        });
    }
    else{
        var obj = snapshot.val();

        if(obj.playerTwoExists){
            $("#name2").html(obj.name);
            $("#p2").html("<button>" + obj.pokemon + "</button>");
            $("#twoplayer").text(obj.name + " health :" + obj.playerTwohealth);
            playerTwoExists = true;
        }
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});



database.ref("/game").on("value", function(snapShot){
    var obj = snapShot.val();

    if(obj.player1 && obj.player2){
        p1name = obj.playerOne.name;
        p2name = obj.playerTwo.name;
        game();
    }
})



// database.ref("/game/playerOne").on("value", function(snapShot){
//     var obj = snapShot.val();

// if(obj.playerOnehealth == 0){
//   playerOneExists = false,
//   playerTwoExists = false
// }
// });


// database.ref("/game/playerTwo").on("value", function(snapShot){
//     var obj = snapShot.val();
//  if(obj.playerTwohealth == 0){
//   playerOneExists = false,
//   playerTwoExists = false
// }

// });






var chatName = "Guest" + Math.round(Math.random() * 100000);    //generate guest number for watchers

//chat listener
database.ref("chat").on("child_added", function (snapChat) {
    var line = snapChat.val();
    console.log(line);
    $("<div>").text(line.chatName + ": " + line.chatMessage).appendTo($("#chatLog"));


}, function (errObj) { console.log("Something went horribly wrong in chat! ErrorCode: " + errObj.code) })