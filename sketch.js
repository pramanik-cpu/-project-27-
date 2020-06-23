//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//var packageBody,ground;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1= new Roof(400,20,600,30);

	bob1= new Bob(200,220,30);
	bob2= new Bob(300,220,30);
	bob3= new Bob(400,220,30);
	bob4= new Bob(500,220,30);
	bob5= new Bob(600,220,30);

	rope1=new Rope(bob1.body,roof1.body,-100,0);
	rope2=new Rope(bob2.body,roof1.body,-50,0);
	rope3=new Rope(bob3.body,roof1.body,0,0);
	rope4=new Rope(bob4.body,roof1.body,50,0);
	rope5=new Rope(bob5.body,roof1.body,100,0);



	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  
  drawSprites();
  
  roof1.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
	   Matter.Body.applyForce(bob1.body,bob2.body.position,{x:-300,y:-50});
	   
	 }
   }

