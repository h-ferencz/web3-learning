function rollDice() {
  var playerOne = Math.floor(Math.random() * 6) + 1;
  var playerTwo = Math.floor(Math.random() * 6) + 1;

  if (playerOne > playerTwo) {
    document.querySelector(".player2cup").classList.add("hide");
    document.querySelector(".player1cup").classList.remove("hide");
  } else if (playerOne < playerTwo) {
    document.querySelector(".player1cup").classList.add("hide");
    document.querySelector(".player2cup").classList.remove("hide");
  } else if (playerOne == playerTwo) {
    document.querySelector(".player1cup").classList.remove("hide");
    document.querySelector(".player2cup").classList.remove("hide");
  }


  document.querySelector(".player1").setAttribute("src", playerOne + ".png");
  document.querySelector(".player2").setAttribute("src", playerTwo + ".png");


}
