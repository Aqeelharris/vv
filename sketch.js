

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

var bobDiametr = 40;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	bobObject1 = new Bob(200,400,20);
		// create 4 more bob objects at same y position but different x position say 240,
		//280,320....

	
	roof = new Ground(360,200,350,20);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiametr*2,10);
	//create 4 more rope objects and 3rd parameter will be different like
	// -bobDiametr, 0, -bobDiametr,-bobDiametr*2

}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("yellow");
  bobObject1.display();
  // display all bobObjects below

  rope1.display();
  //display all rope objects below

  roof.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		// Use Matter.Body.applyForce for bobObject1 woth a negative x and y force,,
		// refer to crumpled balls project as hint
	}
}



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(200,400,20);
	bobObject2 = new Bob(240,400,20);
	bobObject3 = new Bob(280,400,20);
    bobObject4 = new Bob(320,400,20);
	bobObject5 = new Bob(350,400,20);

    roof1 = new Roof(400,50,400,10)
	 
	rope1 = new SlingShot(bobObject1.body,{x:200, y:50})
	rope2 = new SlingShot(bobObject2.body,{x:200, y:50})
	rope3 = new SlingShot(bobObject3.body,{x:200, y:50})
	rope4 = new SlingShot(bobObject4.body,{x:200, y:50})
	rope5 = new SlingShot(bobObject5.body,{x:200, y:50})

	Engine.run(engine);
  
}


function draw() {
  background(0);

  bobObject1 = display();
  bobObject2 = display();
  bobObject3 = display();
  bobObject4 = display();
  bobObject5 = display();

  roof1.display();
  
  drawSprites();
 
}



