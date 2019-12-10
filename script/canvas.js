 /*jshint esversion: 8 */


 //Get Canvas
 window.onload = function() {
   var canvas = document.getElementById("sky");
   var ctx = canvas.getContext("2d");
   //Set canvas dimentions
   var W = window.innerWidth;
   var H = window.innerHeight;

   canvas.width = W;
   canvas.height = H;


   //Make snow!
   var mf = 100; //max flakes
   var flakes = [];

   //loop through the empty flakes and apply attributes
   for (var i = 0; i < mf; i++) {
     flakes.push({
       x: Math.random() * W,
       y: Math.random() * H,
       r: Math.random() * 5 + 2, //size variatopn of flakes, 2-7px
       d: Math.random() + 1 //flake density
     });
   }

   //draw flakes to the canvas
   function drawFlakes() {
     ctx.clearRect(0, 0, W, H);
     ctx.fillStyle = "white";
     ctx.beginPath();

     for (var i = 0; i < mf; i++) {

       var f = flakes[i];
       ctx.moveTo(f.x, f.y);
       ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
     }
     ctx.fill();
     moveFlakes();

   }

   //Flake animation
   var angle = 0;

   function moveFlakes() {
     angle += 0.01;
     for (var i = 0; i < mf; i++) {

       //Store current flake
       var f = flakes[i];

       //Update X and Y coordinates of every flake
       f.y += Math.pow(f.d, 2) + 1;
       f.x += Math.sin(angle) * 2;

       //if the flake reach the bottom, send new to variatopn
       if (f.y > H) {
         flakes[i] = {
           x: Math.random()* W,
           y: 0,
           r: f.r,
           d: f.d
         };
       }
     }
   }
setInterval(drawFlakes, 25);
 };
