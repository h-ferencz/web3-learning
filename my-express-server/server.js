const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("");
});

app.get("/contact", function(req, res) {
    res.send("contact me at example@adb.com");
});

app.get("/one", function(req, res) {
    res.send("power");
});


app.listen(3000, function() {
    console.log("node server")
});
