 /*jshint esversion: 8 */

let player = localStorage.getItem("player");

console.log(player);


let playerDisplay = document.getElementById("player");
playerDisplay.innerHTML = "<div class= 'victoryName'>" +
"<h2>" + player + "</h2>" + "</div>";
let victoryTubbie = document.getElementById("victoryTubbie");
victoryTubbie.classList.add(player);
