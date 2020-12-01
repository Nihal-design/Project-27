
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball; //ball2, ball3, ball4, ball5;
var ground;
var rope, rope2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new PaperBall(400, 350, 20);
	//ball2=new PaperBall2(320, 350, 20);
	//ball3=new PaperBall3(320, 350, 20);
	//ball4=new PaperBall4(320, 350, 20);
	//ball5=new PaperBall5(320, 350, 20);
	ground=new Ground(400, 100, 1600, 20);
	rope2=new Chain2(ball.body, ground.body);
	//rope2=new Chain2(ball2.body, ball.body);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("white");

  

  ball.display();
  //ball2.display();
  //ball3.display();
  //ball4.display();
  //ball5.display();
  ground.display();
  //rope.display();
  rope2.display();
  
  drawSprites();
 
}



