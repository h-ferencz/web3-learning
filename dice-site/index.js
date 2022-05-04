function rollDice() {
  var playerOne = Math.floor(Math.random() * 6) + 1 + ".png";
  var playerTwo = Math.floor(Math.random() * 6) + 1 + ".png";

  document.querySelector(".player1").setAttribute("src", playerOne);
  document.querySelector(".player2").setAttribute("src", playerTwo);


}
