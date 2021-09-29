let radius = 10


function setup() {
  createCanvas(1200, 600);
  noCursor();
  
  //Creating Groups 
  town = new Group();
  missle = new Group();
  turrent = new Group();
}

function backgroundImage(){
  image(bgImage, 0, 0);
}



function draw() {
  backgroundImage();
  buildings();
  //audio();
  shooting();
  mouseAim();
  title();
}

function buildings() {
  drawSprites(town)
  //Buildings 1
  building = createSprite(100, 540)
  building.addImage(city)
  city.resize(200, 130)
  building.addToGroup(town)

  //Buildings 2
  building2 = createSprite(350, 540)
  building2.addImage(city)
  building2.addToGroup(town)

  //Buildings 3
  building3 = createSprite(850, 540)
  building3.addImage(city)
  building3.addToGroup(town)

  //Buildings 4
  building4 = createSprite(1100, 540)
  building4.addImage(city)
  building4.addToGroup(town)
} 
function shooting() {
drawSprites(turrent)
drawSprites(missle)
shooters = createSprite(600, 565)
shooters.addImage(redTurrent)
shooters.addToGroup(turrent)
} 
function mouseAim(){
  noFill()
  stroke(255)
  strokeWeight(2)
  ellipse(mouseX, mouseY, radius, radius)
}