 /*jshint esversion: 8 */

 /* =================================
   How To play Modal
 ==================================== */

 //Get the modal and the button to open it
 const modal = document.getElementById("helpModal");
 const btn = document.getElementById("modalbtn");
 const closeBtn = document.getElementsByClassName("close")[0];
 //open the modal on clic
 btn.onclick = function() {
   modal.style.display = "block";
 };

 //when clicking on the "got it" button, the modal closes
 closeBtn.onclick = function() {
   modal.style.display = "none";
 };

 // when clicking outside the textbox, the modal closes
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };


 /* =================================
  Trap Modal
 ==================================== */
 const theTrapModal = document.getElementById("modalTrap");
 const closeModalTrap = document.getElementsByClassName("closeTrapBtn")[0];

 //when clicking on the "got it" button, the modal closes
 closeModalTrap.onclick = function() {
   theTrapModal.style.display = "none";
 };

 // when clicking outside the textbox, the modal closes
 window.onclick = function(event) {
   if (event.target == theTrapModal) {
     theTrapModal.style.display = "none";
   }
 };

 /* =================================
  Trap Modal
 ==================================== */
 const theLuckModal = document.getElementById("modalLuck");
 const closeModalLuck = document.getElementsByClassName("closeLuckpBtn")[0];

 //when clicking on the "got it" button, the modal closes
 closeModalLuck.onclick = function() {
   theLuckModal.style.display = "none";
 };

 // when clicking outside the textbox, the modal closes
 window.onclick = function(event) {
   if (event.target == theLuckModal) {
     theLuckModal.style.display = "none";
   }
 };
