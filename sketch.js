const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  squad1 = new Block(640,175,30,40);
  squad2 = new Block(670,175,30,40);
  squad3 = new Block(700,175,30,40);
  squad4 = new Block(730,175,30,40);
  squad5 = new Block(760,175,30,40);

  //level two
  squad6 = new Block(670,135,30,40);
  squad7 = new Block(700,135,30,40);
  squad8 = new Block(730,135,30,40);

  //top
  squad9 = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingshot = new Slingshot(this.polygon, {x:100,y:2000});
}
function draw() {
  background(56,44,44); 
 
  textSize(18);
  fill("cyan");
  text("Drag the polygon and release it, to launch it towards the blocks",150,30);
  textSize(18);
  text("Press Space to get a second Chance to Play!!", 350,350);

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  fill("pink");
  squad1.display();
  squad2.display();
  squad3.display();
  squad4.display();
  squad5.display();
  fill("turquoise");
  squad6.display();
  squad7.display();
  squad8.display();
  fill("grey");
  squad9.display();

  fill("gold");
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40,40);

  slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyDown('space')){
   slingshot.attach(this.polygon);
  }
}
