var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [
    {
      name: "Alex Tyk",
      phone: "(847)-477-0527",
      email: "agt4g@virginia.edu",
      id: "1"
    },
  ];

var waitList = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
app.get("/make.html", function(req, res) {
res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all reservations
app.get("/api/tables/reservations", function(req, res) {
res.json(reservations);
});

app.get("/api/tables/waitlist", function(req, res) {
res.json(waitList);
});

app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});



app.post("/make.html", function(req, res) {
var newReservation = req.body;

console.log(newReservation);

if (reservations.length < 5) {
    reservations.push(newReservation);
    res.send(true);
}
else {
    waitList.push(newReservation);
    res.send(false);
}


 

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});