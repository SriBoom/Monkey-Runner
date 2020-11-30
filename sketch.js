

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, ground
var ground2
var FoodGroup, obstacleGroup
var score
var backgroundImage, backdrop

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 backgroundImage = loadImage("jungle.jpg");
  
}



function setup() {
  createCanvas(400, 400);

  ground = createSprite(400, 400, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.visible = false;
  //console.log(ground.x);
  
  backdrop = createSprite(200, 200, 200, 200);
  backdrop.addImage(backgroundImage);
  backdrop.velocityX = -4;
  
  monkey=createSprite(70, 360, 20, 20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  score = 0;
  score2 = 0;
  
  ground2 = createSprite(400, 390, 900, 10);
  ground2.visible = false;
  
  FoodGroup =  new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background(180);
  
  if (backdrop.x < 0){
     backdrop.x = backdrop.width/2;
   }

  if(keyDown("space") && monkey.y >=250) {
    monkey.velocityY = -15;
  }
  monkey.velocityY = monkey.velocityY + 1;
  
  monkey.collide(ground2);
  
  drawSprites();
  food();
  spawnObstacles();
  
  text("score:"+score, 340, 20);
  
  if(FoodGroup.isTouching(monkey)){
   score = score+1;
  FoodGroup.destroyEach();
  }
  switch(score){
      
  }
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

function spawnObstacles() {
   if(frameCount%100 === 0) {
  var obstacle = createSprite(400, 370, 20, 20);
  obstacle.x = Math.round(random(200,300));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4;
    
    obstacle.setLifeTime = 400

    obstacleGroup.add(obstacle);
}
}

