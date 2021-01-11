const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

var entries = [];



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get ("/", function(req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);


  res.render("lists", {kindOfDay: day, newEntries: entries});

});

app.post ("/", function(req, res) {
  var entry = req.body.listEntry;

  entries.push(entry);

  res.redirect("/");//when a post request is triggered on our home route we'll save values and redirect to the home route at app.get and it will res.render it
});

app.listen (3000, function() {
  console.log("server running on port 3000");
});



// var currentDay = today.getDay()
//
// var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var weekPeriod = "";
// var actualday = weekDay[today.getDay()];
//
// if (currentDay === 6 || currentDay === 0) {
//   var weekPeriod = "Weekend";
//
// } else {
//   var weekPeriod = "Weekday";
// }

//Html and JS Code to be written in lists.ejs file
// <% if (kindOfDay === "Saturday" || kindOfDay === "Sunday") { %> //<%# Scriptlet tag only works for basic javascript code for control flow purposes (because you want to keep most of your logic inside your server) and must be applied on every line containing Javascript%>
//    <h1 style = "color: purple">  <%= theDay %> ToDo List</h1>
// <% } else { %>
//    <h1 style = "color: blue"> <%= theDay %> todo list</h1>
// <% } %>
