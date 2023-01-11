//jshint esversion:6
const express = require("express");

const app = express();

app.get("/", function(request , response){
    response.send("<h1>Hello! My name is Mohd Ghouse Tazeem</h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me at ghousetazeem@gmail.com");
});

app.get("/about", function(req, res){
    res.send("I am a passionate coder and an Enthusiastics programmer")
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
});
