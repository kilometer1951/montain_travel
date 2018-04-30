const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const app = express();

//app.engine('.ejs', express)
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function(req, res) {
    res.render("test");
});


app.post("/u", function(req, res) {
    console.log('body: ' + JSON.stringify(req.body));
    var data = req.body.senderName;
    res.send(data);
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Connection successfull");
});
