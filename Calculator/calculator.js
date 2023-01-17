//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/HTMLS/index.html");
});


app.post("/home", function(req, res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var sum = num1 + num2;
    res.send("The addition is " + sum);
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/HTMLS/bmiCalculator.html");
})

app.post("/bmi", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your bmi is " + bmi);
});

app.listen(5000);
