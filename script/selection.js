 /*jshint esversion: 8 */

 //Declare variables
 let player = null;
 const startGame = document.getElementById("startGame");
 const allPlayers = document.querySelectorAll(".charBox");


 //Create the character selction that happens when you click the charBox
 allPlayers.forEach(function(characterBox) {
   characterBox.addEventListener("click", function() {

     let characterName = this.dataset.name;
     let selectedPlayerDisplay = document.getElementById("selectedPlayer");

     // When clicking an other character, the selected becomes unselected
     if (this.classList.contains("theChosen")) {
       this.classList.remove("theChosen");
       player = null;
     } else {
       allPlayers.forEach(function(characterBox) {
         characterBox.classList.remove("theChosen");
       });
       // The character is selected when clicked, and the theChosen class is created
       this.classList.add("theChosen");
       player = characterName;
     }


     /* When no character is selected the startbutton is disabled, and "none selected is displayed" */
     if (player === null) {
       selectedPlayerDisplay.innerHTML = "None selected";
       localStorage.removeItem("player");
       startGame.disabled = true;

       //When a character is selected, the name is displayed, and the start button is activated
     } else {
       selectedPlayerDisplay.innerHTML = characterName;
       localStorage.setItem("player", characterName);
       startGame.disabled = false;
     }
     console.log(player);
   });

 });
 // when the start game button is pressed, the game page is loaded
 startGame.addEventListener("click", function() {
   window.location.href = "thegame.html";
 });
