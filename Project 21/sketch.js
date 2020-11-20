
var fixedRect, movingRect;
var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,15);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  thickness = random(22,83);
}

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10) {
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }
  }
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

if(wall.x-bullet.x < bullet.width + wall.width)/2) {
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation > 180) {
    car.shapeColor = color(255,0,0);
  }
  if(deformation < 180 && deformation > 100) {
    car.shapeColor = color(230,230,0);
  }
  if(deformation < 100) {
    car.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided(Lbullet,Lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
    if(bulletRightEdge >= wallLeftEdge) {
      return true;
    }
    return false;
}