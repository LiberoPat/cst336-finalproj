const express = require("express");
const app = express();
const request = require("request");
const pool = require("./dbPool.js");

app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function (req, res) {
res.render("index");
 });
 

 //welome page
app.get("/", function (req, res) {
res.render("results");
 });
 
//starting server 
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running....");
});
