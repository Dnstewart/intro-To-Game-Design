function getCanvas() {
    let canvas = document.querySelector("#canv");
    let ctx = canvas.getContext("2d");
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return { canvas, ctx };
  }
  
  //prints to console
  //console.log(`${}`);

  //block movver
  // function directionCheck(up,down,left,right)
  // {
  //     // if (up)
  //     // {
  //     //     if (playerY > 0){
  //     //       playerY -= .1;
  //     //     }
  //     //     else{
  //     //       console.log("Top boundry reached.\n");
  //     //     }
  //     // }
  //     // if (down)
  //     // {
  //     //     if (playerY + playerH < window.innerHeight)
  //     //     {
  //     //       playerY += .1;
  //     //     }
  //     //     else{
  //     //       console.log("Bottom boundry reached.\n");
  //     //     }
  //     // }
  //     // if (left)
  //     // {
  //     //     if (playerX > 0){
  //     //       playerX -= .1;
  //     //     }
  //     //     else{
  //     //       console.log("Left boundry reached.\n");
  //     //     }
  //     // }
  //     // if (right)
  //     // {
  //     //     if (playerX + playerW < window.innerWidth)
  //     //     {
  //     //       playerX += .1;
  //     //     }
  //     //     else{
  //     //       onsole.log("Right boundry reached.\n");
  //     //     }
  //     // }
  // }

  // function ease(time) {
  //   return Math.sin(time);
  // }
  
  
  // function bounce(time) {
  //   let outTime = 0;
  
  //   outTime = time;
  //   while (outTime > 1) {
  //     outTime -= 1;
  //   }
  
  //   if (outTime < .5) {
  //     outTime *= 2
  //   }
  //   else {
  //     outTime = (1 - outTime) * 2;
  //   }
  
  //   return outTime;
  // }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  export {getCanvas, getRandomInt};