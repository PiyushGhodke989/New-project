var movingRect,fixedRect
 
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200,80, 50);
  movingRect=createSprite(300, 200, 50, 80);
  gameObject1=createSprite(100, 200, 50, 80);
  gameObject2=createSprite(200, 200, 50, 80);
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX
  movingRect.y=mouseY

 if( isTouching(movingRect,gameObject1)){

  movingRect.shapeColor="red"
  gameObject1.shapeColor="red"

 }

 else{

  movingRect.shapeColor="green"
  gameObject1.shapeColor="green"

 }

  drawSprites();
}

