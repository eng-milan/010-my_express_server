//jshint esversion:6//
const express = require("express");
const app = express();
app.get("/", function (req, res) {
  console.log(req);
  res.send(
    "<h1>Server is running.</h1><p>This server is running with Express</p>"
  );
});
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
