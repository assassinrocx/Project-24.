
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var rubber;
var hammer;
var stone;


function setup() {
	createCanvas(1920 , 965);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(970,957,1950,10);
	rubber = new Rubber(980,930);
	hammer = new Hammer(1000,1000);
	stone = new Stone(910,930);
	iron = new Iron(600,930);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("blue");

  ground.display();
  rubber.display();
  hammer.display();
  stone.display();
  iron.display();

  drawSprites();
 
}
