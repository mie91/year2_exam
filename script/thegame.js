/*jshint esversion: 8 */

//Declare variables
let p1Score = 0;
const p1ScoreDisplay = document.getElementById("p1ScoreDisplay");
const player = localStorage.getItem("player");
const playerDisplay = document.getElementById("player");
playerDisplay.innerHTML = player;

//Get the correct token for the board
const playerToken = document.getElementById("playerToken");
playerToken.classList.add(player);

//Get the correct tubbie/token for the left display
const playerTubbie = document.getElementById("playerTubbie");
playerTubbie.classList.add(player);

//Show the players score
p1ScoreDisplay.innerHTML = p1Score;

//Add click event to dice
const theDice = document.getElementById("theDice");
theDice.addEventListener("click", function() {
  const theDice = this;

  //Add the roll class(used for animation )
  //The empty "" for removal of the "Roll dice" text
  theDice.innerHTML = "";
  theDice.classList.add("rolls");

  //Get a random n 1 to 6
  setTimeout(function() {
    const rollDice = Math.floor(Math.random() * 6) + 1;
    updateScore(rollDice);
    tokenProgress();

    const diceClass = "theDice" + rollDice;
    theDice.classList = "";
    theDice.classList.add(diceClass);
    theDice.classList.remove("rolls");
    //This is the X amount of m.sec before the code is run
  }, 500);
});

//Add the new score after the dice roll to the current score
function updateScore(newRoll) {
  p1Score = p1Score + newRoll;
  updateScoreDisplay(p1Score);
}

// Displaying the new score
function updateScoreDisplay(updateScore) {
  p1ScoreDisplay.innerHTML = updateScore;
}

function trap() {
  // open modal
  theTrapModal.style.display = "block";
  // change pIScore
  p1Score = p1Score - 3;
  updateScoreDisplay(p1Score);
  // move the token
  tokenProgress();
}

function luck() {
  // open modal
  theLuckModal.style.display = "block";
  // change pIScore
  p1Score = p1Score + 1;
  updateScoreDisplay(p1Score);
  // move the token
  tokenProgress();
}

function tokenProgress() {
  const tiles = document.querySelectorAll(".tile");
  const allTiles = tiles.length;


  // If Token moves past GOAL, it has to go back
  if (p1Score > allTiles - 1) {
    const scorePastTotal = p1Score - (allTiles - 1);
    const recalculateScore = allTiles - scorePastTotal;
    p1Score = recalculateScore;
    updateScoreDisplay(p1Score);
  }
  // Checks if the token is inside tile

  for (var i = 0; i < allTiles; i++) {
    // tiles.forEach(function(tile, indexOfTile) {
    const insideTile = tiles[i].childNodes;
    insideTile.forEach(function(element) {
      // If it is, it will be removed
      if (element.id === "playerToken") {
        element.remove();
      }
    });
    //Checks if the score matches tile, if it does, the Token is appended
    if (i === p1Score) {

      //check if this is a trap
      if (p1Score === 4 || p1Score === 6 || p1Score === 11 || p1Score === 15 || p1Score === 20 || p1Score === 25) {
        trap();
        break;
      }

      //check if player is lucky
      if (p1Score === 2 || p1Score === 9 || p1Score === 13 || p1Score === 21) {
        luck();
        break;
      }

      const token1 = document.createElement("div");
      token1.classList.add("playerToken", player);
      token1.id = "playerToken";


      //If token reaches GOAL it goes to the victory screen
      tiles[i].appendChild(token1);
      if (p1Score === allTiles - 1) {
        window.location.href = "./victory.html";
      }
    }
  }
}
