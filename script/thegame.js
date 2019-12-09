
 /*jshint esversion: 8 */

let p1Score = 0;
let p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
let player = localStorage.getItem("player");
let playerDisplay = document.getElementById("player");
playerDisplay.innerHTML= player;

let playerToken = document.getElementById("playerToken");
playerToken.classList.add(player);

let playerTubbie = document.getElementById("playerTubbie");
playerTubbie.classList.add(player);

p1ScoreDisplay.innerHTML = p1Score;

let theDice = document.getElementById("theDice");
theDice.addEventListener("click", function() {
  let theDice = this;
  theDice.innerHTML = "";
  theDice.classList.add("rolls");

  setTimeout(function() {
    let rollDice = Math.floor(Math.random() * 6) + 1;
    updateScore(rollDice);
    tokenProgress();

    let diceClass = "theDice" + rollDice;
    theDice.classList = "";
    theDice.classList.add(diceClass);
    theDice.classList.remove("rolls");

  }, 500);
});

function updateScore (newRoll) {
  p1Score = p1Score + newRoll;
  updateScoreDisplay(p1Score);
}

function updateScoreDisplay(updateScore) {
  p1ScoreDisplay.innerHTML = updateScore;
}

function tokenProgress () {
  let tiles = document.querySelectorAll(".tile");
  let allTiles = tiles.length;
  console.log("allTiles", allTiles);

  if (p1Score > allTiles - 1) {
    let scorePastTotal = p1Score - (allTiles - 1);
    let recalculateScore = allTiles - scorePastTotal;
    p1Score = recalculateScore;
    updateScoreDisplay(p1Score);
  }

  tiles.forEach(function(tile, indexOfTile) {
    let insideTile = tile.childNodes;
    insideTile.forEach(function(element) {
      if (element.id === "playerToken") {
        element.remove();
      }
    });
    if (indexOfTile === p1Score) {
      let token1 = document.createElement("div");
      token1.classList.add("playerToken", player);
      token1.id ="playerToken";

      tile.appendChild(token1);
      if (p1Score === allTiles - 1) {
        window.location.href = "./victory.html";
      }
    }
  });
}
