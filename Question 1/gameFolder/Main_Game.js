let Width = 1200;
let Height = 700;
let score = 0;

function setup() {
  createCanvas(Width, Height);
  starBackground();
  //Town
  bullet = new Group()


  town = new Group();
  townBuilding = createSprite(600, 150)
  townBuilding.addImage(buildingImg)
  townBuilding.addToGroup(town)


  //Turrents
  turrent = new Group();
  shooters = createSprite(600, 540)
  shooters.addImage(turrentImg)
  shooters.addToGroup(turrent)

  
}

function draw() {
  gameScore();
  buildings();
  MCGame();
}

function starBackground() {
  image(backgroundImg, 0, 0);
}

function buildings() {
  drawSprites(townBuilding)
}
function shooting() {
  drawSprites(turrent)

}

function gameScore() {
  drawDataJson(highscoreJSON);
  
  fill(0);
  rect(0, 600, 1200, 100);
  textAlign(CENTER);
  textSize(36);
  fill(255);
  stroke(255);
  text("Score:" + score, 65, 660);
  text("Highscore:" + highscore, 1000, 660);
}


function bullets(){
  if (keyWentDown(' ')){

  }
}

