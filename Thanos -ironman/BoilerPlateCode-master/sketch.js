function preload() {
  //load game assets
  ironman=loadImage('pic/ironman.png');
  thanos=loadImage("pic/thanos.png");
  bullet=loadImage("pic/bullet.png");
  blast=createImg("pic/blast.gif");
  bgimage=loadImage("pic/space.jpg");
}

var target
var edges
var bullets=[]
var player 
function setup() {
 
  createCanvas(1326,683);
  bg=createSprite(683, 325, 1366 , 650 );
  player=createSprite(1300, 620, 10 ,10 );
  edges=createEdgeSprites();
  target=createSprite(50, 50, 30 ,30 );
  
  for (let i = 0, j=110 ; i<5 ; i++ , j=j+124){ 
   b=createSprite(50 , j , 10 ,2 );
   bullets.push(b);
   }
/*  obs1=createSprite(330, 50, 20 ,300 );
  obs2=createSprite(130, 450, 20 ,300 );
  obs1.velocityY=5;
 obs2.velocityY=-5  */  
} 



function draw() {
  bg.addImage(bgimage);
  bg.velocityX=-2;
  if(bg.x<0)   
  textSize(36); 
  background("white")
  player.addImage(ironman);
  target.addImage(thanos);
  for (let i = 0;i<5;i++){ 
    bullets[i].addImage(bullet);
  }
  for (let i = 0;i<5;i++){ 
    (bullets[i].velocityX=random(5,15));
    if (bullets[i].x>1366)
    bullets[i].x=50
    if (player.isTouching(bullets[i])){
      noLoop();
      text("Game Over",663,441)
    blast.position(bullets[i].x, bullets[i].y )
    bullets[i].destroy()
    player.destroy()
    }
  }
  if( player.isTouching(target)){
    target.destroy()
    text("You Won",663,441)
  }

/*  obs1.bounceOff(edges[2]);
  obs1.bounceOff(edges[3]);
  obs2.bounceOff(edges[2]);
  obs2.bounceOff(edges[3]);
*/
  if(keyDown("right")){
    player.velocityX=5
  };
  if(keyDown("space")){
    player.velocityX=0
    player.velocityY=0
  }
  if(keyDown("left")){
    player.velocityX=-5
  };
  if(keyDown("down")){
    player.velocityY=5
  };
  if(keyDown("up")){
    player.velocityY=-5
  };
  if(keyDown("d")){
    player.velocityX=5
    player.velocityY=5
  };
  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);
  drawSprites();
}


