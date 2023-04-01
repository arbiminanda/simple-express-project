const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.send("<h1>Hello world!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("contact me at arbiminanda10@gmail.com");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/calculator", function (req, res) {
  res.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The addition result is " + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
