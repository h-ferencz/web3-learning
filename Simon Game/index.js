

// click effect

$(".btn").on("click", function(event) {
    $("."+event.target.id).addClass("pressed");
    setTimeout(function() { 
        $("."+event.target.id).removeClass("pressed");
    }, 100);
})
