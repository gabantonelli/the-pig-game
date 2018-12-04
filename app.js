/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, currentScore, activePlayer;
score = [0, 0];
currentScore = 0;
activePlayer = 0;

// Before the first launch hide the dice image
document.querySelector(".dice").style.display = "none";

// create an event listener for the button to roll the dice
document.querySelector(".btn-roll").addEventListener("click", function() {
  // roll the dice to generate a random number from 1 to 6
  var randomDice = Math.floor(Math.random() * 6) + 1;
  // display the result of the dice roll
  var diceDOM = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + randomDice + ".png";
});
