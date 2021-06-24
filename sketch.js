var bg,bg1;
var flag = 1;

function preload() {
 
  bg = loadImage("castle.jpg");
  bg1 = loadImage("level1bg.jpg");
  
}

function setup() {
  var canvas = createCanvas(800,400)
  
  var level1button = createButton("Level1");
  var level2button = createButton("Level2");
  var level3button = createButton("Level3");

  
}

function draw() {
  if(flag === 1)
    background(bg);

  if(flag === 2)
    background(bg1);

  fill("black")
  text(mouseX + "  " + mouseY,400,20);
  
  level();
}