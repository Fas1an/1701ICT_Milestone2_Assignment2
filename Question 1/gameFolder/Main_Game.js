let Width = 1200;
let Height = 700;

let score = 0;
let highscore = 10;
let turrentMissleSpeed = 1;

let townSprite;

function setup() {
  createCanvas(1200, 700);
  starBackground();
  frameRate(60);
  //Town
  bullet = new Group();

  town = new Group();
  townSprite = createSprite(150, 570);
  townSprite.addToGroup(town);
  townSprite.addImage(buildingImg);
  buildingImg.resize(200, 100);

  townSprite2 = createSprite(450, 570);
  townSprite2.addToGroup(town);
  townSprite2.addImage(buildingImg);

  townSprite3 = createSprite(750, 570);
  townSprite3.addToGroup(town);
  townSprite3.addImage(buildingImg);

  townSprite4 = createSprite(1050, 570);
  townSprite4.addToGroup(town);
  townSprite4.addImage(buildingImg);

  //Turrents
  turrent = new Group();
  shooters = createSprite(600, 585);
  shooters.addToGroup(turrent);
  shooters.addImage(turrentImg);
  turrentImg.resize(turrentImg.width / 2, turrentImg.height / 2);

  missile = new Group();
  //Create random location for missile
  missileX = new Array();
  missileY = new Array();

  for (var i = 0; i <= 15; i++) {
    randnumX = random(-100, 1300);
    append(missileX, randnumX);

    randnumY = random(-10, -400);
    append(missileY, randnumY);
  }

  if ((ingame = true)) {
    for (var i = 0; i <= 15; i++) {
      missileSprite = new Array();
      missileSprite = createSprite(missileX[i], missileY[i]);
      missileSprite.addImage(missileArr);
      missileArr.resize(15, 15);
      missileSprite.addToGroup(missile);
      missileSprite.setSpeed(1, random(0, 180));
    }
  }

  missile2 = new Group();

  missileX2 = new Array();
  missileY2 = new Array();

  for (var k = 0; k <= 4; k++) {
    randnumX2 = random(100, 400);
    append(missileX2, randnumX2);
    randnumY2 = random(0, 500);
    append(missileY2, randnumY2);
  }
  if ((ingame = true)) {
    for (var j = 0; j <= 4; j++) {
      missileSprite2 = new Array();
      missileSprite2 = createSprite(missileX2[j], missileY2[j]);
      missileSprite2.addImage(missileFlight);
      missileFlight.resize(10, 10);
      missileSprite2.addToGroup(missile2);
      missileSprite2.setSpeed(1, 360);
    }
  }
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
  drawSprites(missile);
  drawSprites(missile2);
}

function gameScore() {
  fill(0);
  rect(0, 600, 1200, 100);
  textAlign(CENTER);
  textSize(36);
  fill(255);
  stroke(255);
  text("Score:" + score, 200, 660);
  text("Highscore:" + highscore, 900, 660);

  if (score > highscore) {
    highscore = score;
  }
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
    bulletSprites.addToGroup(bullet);
    laserAud.play();
  }
  if (bullet.length > 10) {
    bullet.splice(0, 1);
  }
  bulletArr.resize(10, 10);
}
function resetButton() {
  rsButton = createButton("Reset Game");
  rsButton.position(550, 660);
  rsButton.mousePressed(resetLoad);
}

function resetLoad() {
  load = true;
}
