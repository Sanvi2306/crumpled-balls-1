
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper1,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(400,600,800,30);
paper1= new Paper(200,550,20);
dustbin= new Dustbin(600,580);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


 ground.display();
 dustbin.display();
 paper1.display();
  
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
	    
	  Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-85});
	
	
	
	}
	}


