const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    var sumOfNums = parseInt(num1) + parseInt(num2)


    res.send(sumOfNums.toString());
    console.log(req.body)
});





app.get("/bmi", function(req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req, res) {

    var height = req.body.height;
    var weight = req.body.weight;
    var bmiScore = parseFloat(weight) / (parseFloat(height) * parseFloat(height));


    res.send("your bmi is: " + bmiScore.toString());
    console.log(req.body)
});






app.listen(3000, function() {
    console.log("node server started")
});

