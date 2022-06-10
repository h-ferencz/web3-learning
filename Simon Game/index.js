var computerColorList = [];
var userColorList = [];

// random color
function randomColor() {
    var colors = ["green", "red", "yellow", "blue"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    return randomColor
}



// START THE GAME
$(document).on('keypress', function (e) {

    computerColorList = [];
    userColorList = [];



    var c = randomColor();
    computerColorList.push(c)
    // choosing the right sound for the block
    var sound = new Audio("sounds/" + c + ".mp3");
    $("." + c).addClass("pressed");
    sound.play();
    setTimeout(function () {
        $("." + c).removeClass("pressed");
    }, 100);
    checkResult();
    $("#level-title").text("Press A Key to Start");

});


// DETECT USER CHOICE
$(".btn").on("click", function (event) {


    c = event.target.id
    var sound = new Audio("sounds/" + c + ".mp3");
    // pushing the color to user list
    userColorList.push(c)
    $("." + c).addClass("pressed");
    sound.play()
    setTimeout(function () {
        $("." + c).removeClass("pressed");
    }, 100);
    checkResult();
})


// CHECK USER'S CHOICE
function checkResult() {

    console.log("user: " + userColorList);
    console.log("computer: " + computerColorList);

    if (userColorList.length <= 0) {
        $("#level-title").text("Follow the pattern!");
    } else if (JSON.stringify(computerColorList.slice(0, userColorList.length)) === JSON.stringify(userColorList) && computerColorList.length != userColorList.length) {
        $("#level-title").text("Go on! Score: " + computerColorList.length);
    } else if (JSON.stringify(computerColorList) === JSON.stringify(userColorList)) {

        

        setTimeout(function () {
            var c = randomColor();
            computerColorList.push(c)
            // choosing the right sound for the block
            var sound = new Audio("sounds/" + c + ".mp3");
            $("." + c).addClass("pressed");
            sound.play()
            setTimeout(function () {
                $("." + c).removeClass("pressed");
            }, 100);
            checkResult();
            userColorList = [];
        }, 1000);

        $("#level-title").text("Go on! Score: " + computerColorList.length);
        
    } else {
        var sound = new Audio("sounds/wrong.mp3");
        sound.play();

        $("body").css("background-color","red");
        setTimeout(function () {
            $("body").css("background-color","#195ca3");
        }, 100);
        $("#level-title").text("Press any key to restart. Final score: " + computerColorList.length);

        computerColorList = [];
        userColorList = [];
        
    }
}
