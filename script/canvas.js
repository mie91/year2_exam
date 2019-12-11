 /*jshint esversion: 8 */

 //Get Canvas
 window.onload = function() {
   const canvas = document.getElementById("sky");
   const ctx = canvas.getContext("2d");
   //Set canvas dimentions
   const W = window.innerWidth;
   const H = window.innerHeight;

   canvas.width = W;
   canvas.height = H;


   //Make snow!
   const mf = 150; //max flakes
   const flakes = [];

   //loop through the empty flakes and apply attributes
   for (let i = 0; i < mf; i++) {
     flakes.push({
       x: Math.random() * W,
       y: Math.random() * H,
       r: Math.random() * 7 + 2, //size variatopn of flakes, 2-7px
       d: Math.random() + 0.5 //flake density
     });
   }

   //draw flakes to the canvas
   function drawFlakes() {
     ctx.clearRect(0, 0, W, H);
     const canvasGradient = ctx.createLinearGradient(45, 0, 0, 140);
     canvasGradient.addColorStop(0.1, "#702849");
     canvasGradient.addColorStop(0.5, "#ffffff");
     canvasGradient.addColorStop(1, "#1a5b6a");
     ctx.fillStyle = canvasGradient;
     ctx.beginPath();

     for (let i = 0; i < mf; i++) {

       let f = flakes[i];
       ctx.moveTo(f.x, f.y);
       ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
     }
     ctx.fill();
     moveFlakes();

   }

   //Flake animation
   let angle = 0;

   function moveFlakes() {
     angle += 0.01;
     for (let i = 0; i < mf; i++) {

       //Store current flake
       let f = flakes[i];

       //Update X and Y coordinates of every flake
       f.y += Math.pow(f.d, 1) + 3;
       f.x += Math.sin(angle) * 0.2;

       //if the flake reach the bottom, send new to variatopn
       if (f.y > H) {
         flakes[i] = {
           x: Math.random() * W,
           y: 0,
           r: f.r,
           d: f.d
         };
       }
     }
   }
   setInterval(drawFlakes, 25);
 };
