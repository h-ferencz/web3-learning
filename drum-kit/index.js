var buttons = document.querySelectorAll(".drum")


buttons.forEach((button) => {
  button.addEventListener("click", function () {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  });
});
