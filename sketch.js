
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy,slingshot;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
  mango2 = new mango(1100,200,30);
  mango3 = new mango(1200,200,30);
  mango4 = new mango(950,250,30);
  mango5 = new mango(1000,200,30);
	mango6 = new mango(1000,100,30);
	mango7 = new mango(900,200,30);
	mango8 = new mango(1170,120,30);
	stone = new Stone(235,420,20);
    
	treeObj = new tree(1050,580);
	groundObject = new ground(width/2,600,width,20);
	slingshot= new Slingshot(stone.body,{x:100,y:100});

	//Engine.run(engine);

}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  text("PRESS SPACE TO HIT MANGO AGAIN",100,50);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  slingshot.display();
  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX,y: mouseY})
}
function mouseReleased(){
	Slingshot.fly();
}
