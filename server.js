//jshint esversion:6//
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  console.log(req);
  res.send(
    "<h1>Server is running.</h1><p>This server is running with Express</p>"
  );
});
app.get("/contact", function (req, res) {
  res.send("tohid_d.milan@yahoo.com");
});
app.get("/about", function (req, res) {
  res.send(
    "<p>I'm a new web developer. I started my work with learning front-end and I'm developing my skills now. I'm also getting into back-end to see what's going on there.</p>"
  );
});
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
