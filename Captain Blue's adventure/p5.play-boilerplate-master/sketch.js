//Creating variables:
var blue
var score1=0
var score2 =0
var spikei
var zomB,zoing
var ground,g1
var gameState ="lvl0"
var blueleft,blueright,bluejump
var explotionimg
var cactiimg
var addHealthimg
var losehealthimg
var zomBimgwalk
var startimg
var  gameoverimg
var cacgroup
var zomgroup
var life=3
function preload()
{
g1=loadImage("lvl1ground.png")
blueleft=loadAnimation("wl.png","wl2.png")
bluelefti=loadImage("wl2.png")
blueright=loadAnimation("wr.png","wr2.png","wr1.png")
bluejump=loadAnimation("jump.png")
spikei=loadImage("cacti.png")
addHealthimg = loadImage("ah.png")
losehealthimg = loadImage("lh.png")
gunimg=loadImage("gun.png")
goimg=loadImage("go.png")
explosionimg=loadImage("elplotion.png")
fearmeimg=loadImage("fearme.png")
spikei1=loadImage("cactus_01.png")
spikei2=loadImage("cactus_02.png")
lifi=loadImage("ah.png")
zoing=loadAnimation("zom2.png","zom.png","zom3.png")



}
  function setup() {
  createCanvas(1500,700);
  //Creating Sprites:
   blue = createSprite(30, 625, 40, 40);
   blue.addAnimation("lol",blueright)
   //blue.addAnimation("lol",bluejump)



  // blue.addAnimation("LOL",blueright)
  // blue.addAnimation("LOL1",blueleft)
   
   
   
 
  
  ground = createSprite(750,690,1500,20)
  ground.addImage("lol",g1)
  ground.x=ground.width/2
  ground.velocityX=-3
  cacgroup=createGroup()
  zomgroup=createGroup()
}

function draw() {
  background(0);
 //Giving infinite ground
  if(ground.x<600){
  ground.x=ground.width/2
  }
  //GameStates/level zero
  if(gameState==="lvl0"){
    textSize(20)
    text("Arrow keys to control the blue and press S to start!",350,100)
    if(keyDown("s")){
      gameState="lvl1start"
    }
   
  
  }
  //Level one start
  if(gameState==="lvl1start"){
text("Score:"+score1,100,50)
    score1 =  Math.round(frameCount/15);
    
if (score1>=10){
  text("level 1 cleared, space to go to level 2",600,400)
  ground.velocityX=0
  cacgroup.setVelocityXEach(0)
  blue.velocityX=0
  blue.velocityY=0

}
  if( keyDown("space")){
    gameState="lvl2start"
  }
}
  
  
 if( gameState==="lvl2start"){
    text("Score:"+score2,100,50)
    score2 = score2 + Math.round(getFrameRate()/60);
    //score1=Math.round(score1/1)
    ground.velocityX=-3
    cacgroup.setVelocityXEach(-3)

  
if (score2>=1500){
  text("level 2 cleared good job mission cleared",600,400)
  ground.velocityX=0
  cacgroup.setvelocityXEach(0)
  blue.velocityX=0
  blue.velocityY=0
  }
}
  
  //Code for the blue to move
 if( blue.collide(ground)){
  if(keyIsDown(UP_ARROW)){
    blue.changeAnimation("lol",bluejump)
blue.velocityY=-10
  }
}

blue.velocityY = blue.velocityY + 0.3
  if(keyIsDown(LEFT_ARROW)){
    blue.x=blue.x-3
      }
   if(keyIsDown(RIGHT_ARROW)){
        blue.x=blue.x+3
        blue.changeAnimation("lol",blueright)
          }
if (blue.isTouching(cacgroup)){
 blue.velocityX=0;
   blue.velocityY=0
   textSize(30)
   text("GAME OVER!!!",600,400)
        }
          blue.collide(ground)
          CACTI()
         ZOMB()
  drawSprites();

      }
function CACTI(){
  if(frameCount%400===0){
    cacti =createSprite(1400,605,30,30)
    cacti.scale=0.3
    cacti.velocityX=-3
    cacti.lifetime=1400
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1:cacti.addImage(spikei);
      cacti.scale=0.5
              break;
      case 2: cacti.addImage(spikei1);
              break;
      case 3: cacti.addImage(spikei2);
              break;
     
      default: break;
    }
    cacgroup.add(cacti)

  }
}
function ZOMB(){
  if(frameCount%100===0){
 var zomB =createSprite(1400,605,30,30)
 zomB.addAnimation("lolthat",zoing)
    zomB.scale=0.3
    zomB.velocityX=-2
    zomB.lifetime=1400
    
    zomgroup.add(zomB)

  }
}
