const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// var a;
// var circles=[];

//creating objects
var engine, world;
var polygon,polygonImg
var ground1, stand1, stand2;  
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12, block13;
var block14, block15, block16;
var block17, block18, block19, block20, block21;
var block22, block23, block24, block25;
var slingshot1;
var polygon1;

function preload() {
  polygonImg = loadImage("polygon.png")
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  //creating bodies
  //ground1 = new Ground(600,980,1200,20);
  stand1 = new Ground(925,300,250,20);
  stand2 = new Ground(620,489,250,20);
  
  //STAND 1
    
    //level 1
    fill("blue");
    block1 = new Bluebox(530,460,30,40);
    block2 = new Bluebox(560,460,30,40);
    block3 = new Bluebox(590,460,30,40);
    block4 = new Bluebox(620,460,30,40);
    block5 = new Bluebox(650,460,30,40);
    block6 = new Bluebox(680,460,30,40);
    block7 = new Bluebox(710,460,30,40);
    

    //level 2
    fill("pink");
    block8 = new Pinkbox(560,420,30,40);
    block9 = new Pinkbox(590,420,30,40);
    block10 = new Pinkbox(620,420,30,40);
    block11 = new Pinkbox(650,420,30,40);
    block12 = new Pinkbox(680,420,30,40);

    //level 3
    fill("blue");
    block13 = new Bluebox(590,380,30,40);
    block14 = new Bluebox(620,380,30,40);
    block15 = new Bluebox(650,380,30,40);

    //level 4
    fill("pink");
    block16 = new Pinkbox(620,340,30,40);
    
 
  //STAND 2

    //level 1
    fill("pink");
    block17 = new Bluebox(860,270,30,40);
    block18 = new Bluebox(890,270,30,40);
    block19 = new Bluebox(920,270,30,40);
    block20 = new Bluebox(950,270,30,40);
    block21 = new Bluebox(980,270,30,40);

    //level 3
    fill("blue");
    block22 = new Pinkbox(890,230,30,40);
    block23 = new Pinkbox(920,230,30,40);
    block24 = new Pinkbox(950,230,30,40);

    //level 4
    fill("pink");
    block25 = new Bluebox(920,190,30,40);

  // polygon= Bodies.circle(50,200,20);
  // World.add(world,polygon);

  polygon1 = new Polygon(50,400,50,50);

  slingshot1 = new Slingshot(polygon1.body, {x:250, y:300});

  
}

function draw() {
  //camera.zoom=camera.zoom+1
  rectMode(CENTER);
  background(56,44,44); 
  Engine.update(engine); 
 textSize(16);
 text("Press space for next chance!", 980, 570)
  

stand1.display();
stand2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();

block13.display();
block14.display();
block15.display();
block16.display();

block17.display();
block18.display();
block19.display();
block20.display();
block21.display();

block22.display();
block23.display();
block24.display();

block25.display();

polygon1.display();
slingshot1.display();


 drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
       slingshot1.attach(polygon1.body)
  }
}