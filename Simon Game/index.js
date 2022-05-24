



// random color

function randomColor() {
    var colors = ["green", "red", "yellow", "blue"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor
}


$(document).on('keypress',function() {
    var c = randomColor();
    $("."+c).addClass("pressed");
    setTimeout(function() { 
        $("."+c).removeClass("pressed");
    }, 100);
});



// // click effect

$(".btn").on("click", function(event) {
    $("."+event.target.id).addClass("pressed");
    setTimeout(function() { 
        $("."+event.target.id).removeClass("pressed");
    }, 100);
})

