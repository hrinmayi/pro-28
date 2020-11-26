
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var world,engine;
var boy,mango1,mango2,mango3,mango4,mango5;
var stone1,tree,chain,ground;
function preload(){
  boy=loadImage("Plucking mangoes/boy.png");
}


function setup() {
	createCanvas(800, 400);
engine = Engine.create();
	world = engine.world;
tree=new Tree(600,200,250,400);
mango1=new Mango(700,100,50,50);
mango2=new Mango(600,150,50,50);
mango3=new Mango(650,125,50,50);
mango4=new Mango(550,90,50,50);
mango5=new Mango(650,50,50,50);
stone1=new Stone(255,365,30,30);
chain=new Chain(stone1.body,{x:170,y:280});
ground=new Ground(400,390,800,20);


  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
stone1.display();
  chain.display();
 ground.display();
 image(boy,200,330,95,200);
}
function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	}
	
	function mouseReleased(){
	chain.fly();
	
	
	}


