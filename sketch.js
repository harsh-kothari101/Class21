var fixedRect, movingRect;
var gameObject1, gameObject2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor= "green";
  fixedRect.debug = true;
  fixedRect.velocityY=1;


  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(1000,400,50,80); 
  gameObject1.shapeColor= "blue";
  gameObject1.debug = true;
  
  gameObject2 = createSprite(600,400,50,80); 
  gameObject2.shapeColor= "blue";
  gameObject2.debug = true;
  gameObject2.velocityY=-1;
}

function draw() {
  background("black");
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  bounceOff(fixedRect,gameObject2);
  

  drawSprites();
}






















