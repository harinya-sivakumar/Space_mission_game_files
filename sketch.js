var START = 2;
var PLAY = 1;
var END = 0;
var gameState = START;

var backGround, backGroundImage, invisibleLine, spaceSound;
var spaceShuttle, shuttleImage;

var invisibleObstacle, invisibleObstacle2, invisibleObstacle3, invisibleObstacle4, obstacle, obstacle2, obstacle3, obstacle4,  obstacleImage, obstaclesGroup;

var DC = 0;
var score = -1;
var star, starImage, scoreImage;


function preload(){
  backGroundImage = loadImage("InfiniteRunnerSpaceBackground.jpg");
  shuttleImage = loadImage("spaceShuttle.png");
  spaceSound = loadSound("spaceSound.mp3");
  
  scoreImage = loadImage("starImage.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(600, 600);
  backGround = createSprite(450, 320, 300, 300);
  backGround.addImage(backGroundImage);
  backGround.scale = 0.5;
  backGround.velocityX = -1;
  
  spaceShuttle = createSprite(50, 300, 20, 20);
  spaceShuttle.addImage(shuttleImage);
  spaceShuttle.scale = 0.1;
  
  invisibleLine = createSprite(300, 20, 600, 50);
  invisibleLine.visible = false;
  
  starImage = createSprite(400, 25, 20, 20);
  starImage.addImage(scoreImage);
  starImage.scale = 0.1;
  
  invisibleObstacle = createSprite(900, 300, 30, 30);
  invisibleObstacle.velocityX = -20;
  invisibleObstacle.visible = false;
  
  invisibleObstacle2 = createSprite(900, 300, 30, 30);
  invisibleObstacle2.velocityX = -20;
  invisibleObstacle2.visible = false;
  
  invisibleObstacle3 = createSprite(900, 300, 30, 30);
  invisibleObstacle3.velocityX = -20;
  invisibleObstacle3.visible = false;
  
  invisibleObstacle4 = createSprite(900, 300, 30, 30);
  invisibleObstacle4.velocityX = -20;
  invisibleObstacle4.visible = false;
  
  
}


function draw() {
  background(0);
  
  if(backGround.x == 200){
    backGround.x = 450;
    
  }
  
  
  
  if(gameState == START){
    backGround.visible = false;
    
    score = 0;
    DC = 0;
    
    textSize(20);
    text("Tap the screen and click on 's' to start", 100, 200);
    
    
    if(keyDown("s")){
      gameState = PLAY;
      
    }
  }
  
  
  
  if(gameState == PLAY){
    
  backGround.visible = true;
   
if(frameCount % 40 == 0){
  obstacle2 = createSprite(600, Math.round(random(50, 200)));
  obstacle2.addImage(obstacleImage);
  obstacle2.velocityX = -20;
  obstacle2.scale = 0.1;
  obstacle2.lifetime = 30;
  invisibleObstacle2.x = obstacle2.x
  invisibleObstacle2.y = obstacle2.y
  spaceSound.play(true);
 }
  
 if(frameCount % 50 == 0){
  obstacle3 = createSprite(600, Math.round(random(200, 350)));
  obstacle3.addImage(obstacleImage);
  obstacle3.velocityX = -20;
  obstacle3.scale = 0.1;
  obstacle3.lifetime = 30;
  invisibleObstacle3.x = obstacle3.x
  invisibleObstacle3.y = obstacle3.y
 } 
 
  if(frameCount % 30 == 0){
  obstacle4 = createSprite(600, Math.round(random(350, 570)));
  obstacle4.addImage(obstacleImage);
  obstacle4.velocityX = -20;
  obstacle4.scale = 0.1;
  obstacle4.lifetime = 30;
  invisibleObstacle4.x = obstacle4.x
  invisibleObstacle4.y = obstacle4.y
 }
  
 if(DC % 100 == 0){
   score = score + 1;
 }
  
  
  DC = DC + 1;
  spaceShuttle.y = mouseY;
    
  if(spaceShuttle.isTouching(invisibleLine)){
    spaceShuttle.y = 70;
  }
    
 
    
  if(spaceShuttle.isTouching(invisibleObstacle2)){
    gameState = END;
  }
    
  if(spaceShuttle.isTouching(invisibleObstacle3)){
    gameState = END;
  }
    
  if(spaceShuttle.isTouching(invisibleObstacle4)){
    gameState = END;
  }
    
  }
  
  if(gameState == END){
    backGround.visible = false;
    
    
    textSize(20);
    text("Oops! You hit an object.", 200, 200);
    text("But don't worry. You have covered "+DC+",000 kms", 100, 250);
    text("click on 'r' to restart again", 200, 300);
    
    if(keyDown("r")){
      gameState = START;
    }
    
  }
  
 drawSprites();
  textSize(20);
  text("Distance covered : "+DC+",000 kms", 10, 30);
  text("score : "+score, 420, 30);
}

//Uncaught TypeError: Cannot read property 'isTouching' of undefined (sketch: line 91)
