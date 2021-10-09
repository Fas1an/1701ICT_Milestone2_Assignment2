let width = 1200;
let height = 700;

let score = 0;
let highscore = 100
let turrentMissleSpeed = 1;

let townSprite = [];
let townSprite2 = [];

let missileX = [1, 10, 25, 50, 100, 150, 175, 200, 250,400, 550, 600, 700, 800, 8450, 900, 1000, 1050, 1100, 1200]
let missileY = [-50, -10, -5, -25, - 100, -200, -50, -25, -300, - 250, -100, -10, -80, -90, -75, -25, - 60, -125]


function setup() {
  createCanvas(1200, 700);
  starBackground();
  //Town
  bullet = new Group();

  town = new Group();
  for (let i = 0; i < 4; i++) {
    townSprite[i] = createSprite(150 + 300 * i, 565);
    townSprite[i].addImage(buildingImg);
    buildingImg.resize(buildingImg.width / 1.3, buildingImg.width / 1.3);
    town.add(townSprite[i]);
  }

  for (let j = 0; j < 2; j++) {
    townSprite2[j] = createSprite(300 + 600 * j, 565);
    townSprite2[j].addImage(buildingImg);
    town.add(townSprite2[j]);
  }

  //Turrents
  turrent = new Group();
  shooters = createSprite(600, 585);
  shooters.addImage(turrentImg);
  turrentImg.resize(turrentImg.width / 2, turrentImg.height / 2);
  turrent.add(shooters);

  missile = new Group()
}

function draw() {
  MCGame();
}

function starBackground() {
  image(backgroundImg, 0, 0);
}

function buildings() {
  drawSprites(town);
}
function shooting() {
  drawSprites(turrent);
  drawSprites(bullet);
  drawSprites(missile)
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

function bullets() {
  if (keyWentDown(" ")) {
    bulletSprites = createSprite(shooters.position.x, shooters.position.y);
    bulletSprites.addImage(bulletArr);
    angleMode(DEGREES);
    bulletSprites.setSpeed(
      5,
      -270 - atan2(mouseX - shooters.position.x, mouseY - shooters.position.y)
    );
    bullet.add(bulletSprites);
    if (bullet.length > 10) {
      bullet.splice(0, 1);
    }
    bulletArr.resize(10, 10);
  }
 
}

function dropMissle() {
  missileSprite = createSprite(width/2, height/2)
  missileSprite.addImage(missileArr)
  missileArr.resize(10, 10)
  missileSprite.addToGroup(missile)
}

function resetButton() {
  rsButton = createButton("Reset Game");
  rsButton.position(550, 660);
  rsButton.mousePressed(resetLoad);
}

function resetLoad() {
  load = true;
}


