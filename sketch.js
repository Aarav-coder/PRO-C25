function setup() {
  createCanvas(800,400);
 ground =  createSprite(400, 380, 800, 50);
 ground.shapeColor = "green";
}

function draw() {
  background(0);  
  rain = createSprite(200,0,5,40);
  rain.x = Math.round(random(0,800));
  rain.velocityY = Math.round(random(3,12));
  rain.shapeColor = "rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)))";
  rain.lifetime = 200;
  drawSprites();
}