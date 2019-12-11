 /*jshint esversion: 8 */

//Fetch the stored player
let player = localStorage.getItem("player");
console.log(player);

//Display the name of the player and create a div for the name
let playerDisplay = document.getElementById("player");
playerDisplay.innerHTML = "<div class= 'victoryName'>" +
"<h2>" + player + "</h2>" + "</div>";

//Display the correct tubbie token
let victoryTubbie = document.getElementById("victoryTubbie");
victoryTubbie.classList.add(player);
