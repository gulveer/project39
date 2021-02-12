
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0, ground;
var survivalTime=0;
var back, backImage;
var START = 1;
var END = 2;
var gameState = START;
function preload(){
  
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
 
backImage = loadImage("jungle.jpg"); 

}



function setup() {
createCanvas(400,400);

back = createSprite(0,200,10,10);
back.addImage("jungle",backImage);

back.scale = 2;


monkey = createSprite(0,315,20,20);
monkey.addAnimation("moving",monkey_running) ; 
monkey.scale=0.2; 
monkey.shapeColor = "black";
ground = createSprite(200,375,40000,10);
//ground.velocityX= -4;

bananaGroup = createGroup();
obstacleGroup = createGroup();  




}


function draw() {
background("blue");
//console.log(monkey.x);
//movements to monkey
if(keyDown("space") && monkey.y >= 100) {
        monkey.velocityY = -12;          
    }
if(keyDown(LEFT_ARROW)){
      monkey.velocityX = -5;
    }
else if(keyDown(RIGHT_ARROW)){
      monkey.velocityX = +5;
    } else {

      monkey.velocityX = 0;
    }

 if(monkey.x >= 2000) {
gameState = END;
}
   
 if(gameState === END) {
 
  textSize(40);
  fill("black");
  text("Final Score: " + score,1900,100);
  text("WELL PLAYED",1900,300);
 
 
  back.destroy();
 monkey.destroy();
 bananaGroup.destroyEach();
 obstacleGroup.destroyEach();
  

 

 } 
monkey.velocityY = monkey.velocityY + 0.8 
monkey.collide(ground);
  
  
  
  
//back.x = back.width/2;
 
  
 camera.position.x = monkey.x;
 camera.position.y = 200;
 
 
  
  //ground.x = ground.width/2;
  
  if (bananaGroup.isTouching(monkey)) {
     score = score+2; 
      bananaGroup.destroyEach();
      }
  
  
   
    
    //switch(score) {
     // case 1: monkey.scale=0.12;
      //        break;
     // case 2: monkey.scale=0.14;
     //         break;
     // case 3: monkey.scale=0.16;
      //        break;
      //case 4: monkey.scale=0.18;
      //        break;
      //default: break;
    //}
  
  
  if (obstacleGroup.isTouching(monkey)) {
     monkey.scale = 0.1;
      }
  
      if (bananaGroup.isTouching(monkey)) {
        monkey.scale = 1;
         }
  
  ground.visible = false;
  if(gameState === START){
  Food();
  obsta();
  drawSprites();  

  stroke("black");
  textSize(20);
  fill("black");
  text("score: "+ score, monkey.x, 40);
  
  stroke("red");
  textSize(20);
  fill("red");
  survivalTime=frameCount;
  text("survival Time: "+ survivalTime, monkey.x,60);
  
  textSize(30);
  fill("black");
  text("FINISH",2000,100);
  }
  

}

function Food() {
 
  if (frameCount % 50 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
   // banana.velocityX = -4;
    banana.scale=0.1;
    bananaGroup.add(banana);
    bananaGroup.setLifetimeEach(200);
  } 
}

function obsta(){
 if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,345,40,10);
    obstacle.addImage(obstacleImage);
    //obstacle.velocityX = -4;
    obstacle.scale=0.15;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(200);
 }  
  
  
}


