const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/")
});

app.post("/", function (req, res) {


    const api = "f34a663677c77d87ea66d2133444e7ed";
    const zipCode = req.body.zip;
    const unit = "metric"

    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" + api + "&zip=" + zipCode + ",us&units=" + unit

    https.get(url, function (response) {
        console.log(response);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);

            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;

            res.write("<h1>temperature in nyc is " + temp + " celsius and " + description + "</h1>")
            res.write("<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>")

            res.send()
        })
    })

})








app.listen(3000, function () {
    console.log("server is up on port 3000");
});