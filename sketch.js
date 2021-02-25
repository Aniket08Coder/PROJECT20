var bullet,wall,weight,speed,thickness;
function setup() {
  createCanvas(1600,400);
  // the randoms
  speed = random(55,90);
  weight =random(30,52);
  thickness = random(22,83);
  car = createSprite(50,200,20,20);
 wall = createSprite(1200,200,thickness,width/2);
 
 bullet.velocityX = speed
}

function draw() {
  background(255,255,255);
 
  if(hasCollided(bullet,wall)) 
  {
   bullet.velocityX = 0;
   var damage = 0.5 * wieight * speed * speed  / (thickness * thickness* thickness);
   if(damage>10)
   {
   wall.shapeColr = color(255,0,0);  
   }
   if(damage<10)
   {
    wall.shapeColr = color(0,255,0); 
   }
  }

    
  drawSprites();
}
function hasCollided()
{
bulletRightEdge = lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge >= wallLeftEdge) 
 {
 return true ; 
 } 
 return false;

}