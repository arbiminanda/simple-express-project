const express = require("express");

const app = express();

app.get("/", function (request, response) {
  response.send("<h1>Hello world!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("contact me at arbiminanda10@gmail.com");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
