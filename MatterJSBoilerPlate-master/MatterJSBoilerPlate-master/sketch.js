
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var main,mainImg;
var back1, back2, back3, back4;
var x1=0,x2;
var scrollSpeed = 10;
var Mp3;


function preload()
{
	mainImg= loadAnimation("images/landing.png", "images/landing2.png","images/landing3.png")
	back1 = loadImage("images/houses.png");
	back2 = loadImage("images/image (2).png");

	back3 = loadImage("images/postapocalypse3.png");
	back4 = loadImage("images/postapocalypse4.png");

	back5 = loadImage("images/Parallax.png")

    Mp3 = loadSound("Sounds/spider-eyes-kevin-macleod-main-version-03-34-8439.mp3")

}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	main= createSprite(50, height-200)
	main.addAnimation("landing",mainImg);

	x2 = width;
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

 

  image(back1,x1,0,width,height)
  image(back1,x2,0,width,height)

  x1 -=scrollSpeed;
  x2 -=scrollSpeed;

  if(x1<= -width){
    x1 = width;
}

if(x2<=-width){
    x2=width;
}

Mp3.loop();


if(keyDown("d")){
	main.x += 5
}
if(keyDown("a")){
	main.x -= 5
}
if(keyDown("s")){
	main.y += 5
}
if(keyDown("w")){
	main.y -= 5
}

  drawSprites();
 
}



