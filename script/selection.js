 /*jshint esversion: 8 */
let player = null;
let startGame = document.getElementById("startGame");
let allPlayers = document.querySelectorAll(".charBox");

allPlayers.forEach(function(characterBox) {
  characterBox.addEventListener("click", function() {

    let characterName = this.dataset.name;
    let selectedPlayerDisplay = document.getElementById("selectedPlayer");

    if (this.classList.contains("theChosen")) {
      this.classList.remove("theChosen");
      player = null;
    } else {
      allPlayers.forEach(function(characterBox) {
        characterBox.classList.remove("theChosen");
      });
      this.classList.add("theChosen");
      player = characterName;
    }

    if (player === null) {
      selectedPlayerDisplay.innerHTML = "None selected";
      localStorage.removeItem("player");
      startGame.disabled = true;
    } else {
      selectedPlayerDisplay.innerHTML = characterName;
      localStorage.setItem("player", characterName);
      startGame.disabled = false;
    }
    console.log(player);
  });

});

startGame.addEventListener("click", function() {
  window.location.href = "thegame.html";
});
