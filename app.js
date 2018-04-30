const express = require("express");
const ejs = require("ejs");
const app = express();

//app.engine('.ejs', express)
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res) {
    res.render("test");
});




app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Connection successfull");
});
