
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var binLog1,log2,log3;
var ground;
function preload(){

	
}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	
	ground=new Ground(400,680,800,40)
	ball=new Ball(175,675,25);
	binLog1=new Bin(500,660,20,250,20);
	Log2=new Bin(650,660,20,250,20);
	Log3=new Bin(575,660,180,20,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display();
 binLog1.display();
 Log2.display();
 Log3.display();
 ground.display();
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});


}







}



