var config = {
  apiKey: "AIzaSyCCxOPN17VUppxe3MtdLZfQvdeUUve9FPI",
  authDomain: "pokeroyale-5e4a4.firebaseapp.com",
  databaseURL: "https://pokeroyale-5e4a4.firebaseio.com",
  projectId: "pokeroyale-5e4a4",
  storageBucket: "",
  messagingSenderId: "1044805381798"
};

firebase.initializeApp(config);

var database = firebase.database();

//   create variable for user, .trim .val and push to users array.
var counts = [];

for (i = 0; i < users.length; i++) {
  counts[i] = 0;
  if (users[i] === user.name) {
    var newUser = $(
      [
        "<h1>" + users.name + "</h1>",
        "<img src='users.image'>",
        "<p>" + counter + "</p>",
        "<button>Click Me!</button>"
      ].join("")
    );
    $("button").on("click", function() {
      counts[i]++;
      database.ref().set({
        clickCount: counts[i]
      });
    });
  }
}
