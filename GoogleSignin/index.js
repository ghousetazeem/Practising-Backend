//jshint esversion:6
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    res.send(function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        $("#name").text(profile.getName());
        $("#email").text(profile.getEmail());
        $("#image").attr('src', profile.getImageUrl());
        $(".data").css("display", "block");
        $(".g-signin2").css("display", "none");
    });
    res.send(function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            alert("You have been signed out successfully");
            $(".data").css("display", "none");
            $(".g-signin2").css("display", "block");
        });
    });
});

app.listen(3000);
// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     $("#name").text(profile.getName());
//     $("#email").text(profile.getEmail());
//     $("#image").attr('src', profile.getImageUrl());
//     $(".data").css("display", "block");
//     $(".g-signin2").css("display", "none");
// }

// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         alert("You have been signed out successfully");
//         $(".data").css("display", "none");
//         $(".g-signin2").css("display", "block");
//     });
// }
