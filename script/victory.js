 /*jshint esversion: 8 */

let player = localStorage.getItem("player");

console.log(player);


let playerDisplay = document.getElementById("player");
playerDisplay.innerHTML = player;
let playerToken = document.getElementById("playerToken");
playerToken.classList.add(player);
