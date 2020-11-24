
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground
var ground2
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(400, 400);

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  //ground.x = ground.width/2;
  console.log(ground.x);
  
monkey=createSprite(70, 300, 20, 20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
  
  ground2 = createSprite(400, 360, 900, 10);
  ground2.visible = false;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
background(400);  
  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y >=250) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 1;

  console.log(monkey.y);
  monkey.collide(ground2);
  
  text("score:"+score, 350, 20);
  score = sccore+Math.round(getFrameRate()/50);
  
  food();
  
  drawSprites();
}

function food() {
  if(frameCount%80 === 0) {
  var banana = createSprite(200, 200, 20, 20);
  banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
    banana.setLifeTime = 200;

    FoodGroup.add(banana);
  }
}

function obstacel() {
   if(frameCount%300 === 0) {
  var obstacle = createSprite(200, 350, 20, 20);
  obstacle.x = Math.round(random(120, 300));
    obstacle.addImage(obstacleImage);
    onstacle.scale = 0.5;
    obstacle.velocityX = -4;
    
    banana.setLifeTime = 300;

    obstacleGroup.add(obstacle);
}
}
