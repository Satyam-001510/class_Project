const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,ground;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 box1 = new Box(200,300,50,50);
 box2 = new Box(240,100,50,100);
 ground = new Ground(0,390,800,10);


 
  }

function draw() {
  background("white");
  Engine.update(engine);
 box1.display();
 box2.display();
 ground.display();

  
  }