var engine
var world
var ground;
var earthimg;
var spaceimg;
var sunimg;
var hanumanjiimg;
var hero;
var sun;
var bird, birdimg, birdgroup;





const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

function preload() {
  earthimg = loadImage("/assets/background1.jpg");
  spaceimg = loadImage("/assets/SPACE1.jpg")
  hanumanjiimg = loadImage("/assets/hanumanji2.png");
  sunimg = loadImage("/assets/SUNPICK1.jpg");
  birdimg = loadImage("/assets/birds1.gif")

}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create()
  world = engine.world;
  var ground_properties = {
    isStatic: true

  }

  ground = Bodies.rectangle(750, 580, 1500, 50, ground_properties)
  
  World.add(world, ground);
  hero_options = {
    isStatic: false

  }
  hero = createSprite(600, 450, 30, 20,);
  hero.addImage(hanumanjiimg)
  hero.scale = 0.5;

  sun = createSprite(1150, 50, 30, 20,);
  sun.addImage(sunimg)
  sun.scale = 0.15;

  //World.add(world,hero);


  bird = createSprite(0, 100, 20, 30)
  bird.addImage("fly",birdimg);
  bird.scale = 0.7
  bird.velocityX = +2;
}

function draw() {


  background(earthimg);
  Engine.update(engine)
  rectMode(CENTER);
  fill("yellow")
  rect(ground.position.x, ground.position.y, 1500, 50);

  //imageMode(CENTER)
  //rect(hero.position.x,hero.position.y,30,20);


  if (keyDown("UP_ARROW") && hero.y > 0) {
    hero.y -= 2

  }


  if (keyDown("DOWN_ARROW") && hero.y < 500) {
    hero.y += 2

  }
  if (keyDown("RIGHT_ARROW") && hero.x < 1150) {
    hero.x += 2

  }

  if (keyDown("LEFT_ARROW") && hero.x > 0) {
    hero.x -= 2



  }
  //spawn_birds()

  drawSprites()
}

function spawn_birds() {
  if (frameCount % 50 === 0) {



    bird = createSprite(0, 100, 20, 30)
    bird.addImage("fly",birdimg);
    bird.scale = 0.7
    bird.velocityX = +2;


  }

} 
