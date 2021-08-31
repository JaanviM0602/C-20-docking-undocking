function preload() {
  bgImg = loadImage("images/iss.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadImage("images/brush.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  gym = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
  move = loadAnimation("images/move.png","images/move1.png");
  sleep = loadImage("images/sleep.png");
}

function setup() {
  createCanvas(800,400);
  
  var bg= createSprite(400, 200, 50, 50);
  bg.addImage("bg",bgImg);
  bg.scale = 0.17

  var astronaut = createSprite(300,250);
  astronaut.addImage("sleeping",sleep);
  astronaut.scale = 0.1;
}

   
function draw() {
  background(255,255,255);
  
  if(keyDown(UP_ARROW)) {
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(DOWN_ARROW)) {
    astronaut.addAnimation("exercise", gym);
    astronaut.changeAnimation("exercise");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(LEFT_ARROW)) {
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(RIGHT_ARROW)) {
    astronaut.addAnimation("shower",bath);
    astronaut.changeAnimation("shower");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown(M_KEY)) {
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }


  drawSprites();
}