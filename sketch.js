var fixedRect, movingRect;
var rect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect2 = createSprite(200,100,100,50);
  rect2.shapeColor = "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   
  if(isTouching(movingRect,rect2))
  {
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else 
  {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  drawSprites();
}

//boolean value - true, false
//string - "hai","aahana"
//number - 3,88,54,987
//undefined - var score;
//null var empty =null;
//sprite.isTouching(target)
/*
ball.isTouching(wall);
obstaclesGroup.isTouching(trex)
*/
//object1 as mov , object2 as fix
