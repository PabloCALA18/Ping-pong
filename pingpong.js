let sprPlayer1;
let sprPlayer2;
let sprPelotita;
let angulo;  

function setup(){
  
  createCanvas(1000,800);
  sprPlayer1 = createSprite(40, 400, 40, 300);
  sprPlayer1.shapeColor = color(255,0,0);
  

  sprPlayer2 = createSprite(960, 400, 40, 300);
  sprPlayer2.shapeColor = color(0,255,0);
  
  angulo = random(0, 360);
  sprPelotita = createSprite(500, 400, 40);
  sprPelotita.shapeColor = color(0,0,255);
  sprPelotita.setSpeed(2.5, angulo)


}
function draw(){

background(50);
if(sprPlayer1.overlap(sprPelotita)){
sprPelotita.setSpeed(2.5,-180)

}
if(sprPlayer2.overlap(sprPelotita)){
   sprPelotita.setSpeed(2.5,random(90, 270)) 

  }
  if (sprPelotita.position.y <= 0){
    sprPelotita.setSpeed(2.5,random(0,180))
  }
  if (sprPelotita.position.y >= 800){
    sprPelotita.setSpeed(2.5,random(180,360))
  }
  
  if(sprPlayer1.position.y <=  0){
    sprPlayer1.position.y = 0 ;
  }
  if(sprPlayer1.position.y >=  800){
    sprPlayer1.position.y = 800 ;
  }
  if(sprPlayer2.position.y <=  0){
    sprPlayer2.position.y = 0 ;
  }
  if(sprPlayer2.position.y >=  800){
    sprPlayer2.position.y = 800 ;
  }
  drawSprites();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    
        sprPlayer2.setSpeed(1.5, 270);
  }
   if (keyCode == DOWN_ARROW) {
    
        sprPlayer2.setSpeed(1.5, 90);
    }

  if (  key == 'w') {
    sprPlayer1.setSpeed(1.5, 270);
  }
   if (  key == 's'){
    sprPlayer1.setSpeed(1.5, 90);
  }
  return false;
}