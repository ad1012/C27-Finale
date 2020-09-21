var bobObject1, bobObject2,bobObject3,bobObject4,bobObject5;
var rope1, rope2, rope3, rope4,rope5;
var Roof1; 
var bobDiameter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render; 

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	Roof1 = new roof(600,50,350,30);

	bobDiameter = 60;

	startbobPositionX = width/2;
	startbobPositionY = height/4+20;

	bobObject1 = new bob(startbobPositionX-bobDiameter*2, startbobPositionY,bobDiameter);
	bobObject2 = new bob(startbobPositionX-bobDiameter, startbobPositionY,bobDiameter);
	bobObject3 = new bob(startbobPositionX, startbobPositionY, bobDiameter);
	bobObject4 = new bob(startbobPositionX+bobDiameter, startbobPositionY,bobDiameter);
	bobObject5 = new bob(startbobPositionX+bobDiameter*2, startbobPositionY,bobDiameter);

	var render = Render.create({
		element:document.body,
		engine:engine,
		option:{
			width:1200,
			height:700,
			wireFrame:false,
		}
	})

	rope1 = new rope(bobObject1.body, Roof1.body,-bobDiameter*2,0);
	rope2 = new rope(bobObject2.body, Roof1.body,-bobDiameter*1,0);
	rope3 = new rope(bobObject3.body, Roof1.body,0,0);
	rope4 = new rope(bobObject4.body, Roof1.body,bobDiameter*1,0);
	rope5 = new rope(bobObject5.body, Roof1.body,bobDiameter*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
	
  Roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display(); 
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
  
	  Matter.Body.applyForce(bobObject1.body, Roof1.body.pos,{x:-80, y:55});
	
	}
  }

