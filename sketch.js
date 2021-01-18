var a,b;
function setup() {
  createCanvas(1000,800);

  a=createSprite(400, 100, 50, 80);
  b=createSprite(400, 800, 80, 30);
  a.shapeColor="green";
  b.shapeColor="green";
  a.velocityY=5;
  b.velocityY=-5;
}

function draw() {
  background(0,0,0);
  
  if (a.x - b.x < b.width/2 + a.width/2 && b.x - a.x < b.width/2 + a.width/2) { 
    a.velocityX = a.velocityX * (-1); b.velocityX = b.velocityX * (-1); 
  } if (a.y - b.y < b.height/2 + a.height/2 && b.y - a.y < b.height/2 + a.height/2)
  {
     a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1); }
  


  
  drawSprites();
}