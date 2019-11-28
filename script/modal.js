 /*jshint esversion: 8 */
const modal = document.getElementById("helpModal");
const btn = document.getElementById("modalbtn");
const closeBtn = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};

closeBtn.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
