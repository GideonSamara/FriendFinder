var express = require("express");
var app = express();

var PORT = process.env.PORT || 5050;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var matches = [
    {
      personName: "Jessica",
      female: true,
      age: 25
    }, {
        personName: "Michelle",
        female: true,
        age: 23
      },{
        personName: "Jacob",
        male: true,
        age: 25
      },{
        personName: "Chris",
        male: true,
        age: 27
      },{
        personName: "Phil",
        male: true,
        age: 30
      },{
        personName: "Vivian",
        female: true,
        age: 24
      },
  ];
 
  app.get("/survey", function (req, res) {
      var matches = person.filter(function(person){
          return person.female === true;
      });

      res.render("home", {matches:female});

  });

  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  