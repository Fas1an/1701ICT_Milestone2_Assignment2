let Width = 1200;
let Height = 700;

let score = 0;
let highscore = 100
let turrentMissleSpeed = 1;

let townSprite = [];
let townSprite2 = [];

function setup() {
  createCanvas(1200, 700);
  starBackground();
  frameRate(60)
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
    //Create random location for missile  
    missileX = new Array()
    missileY = new Array()
    
    for (var i = 0; i <=25; i ++){
      randnumX= random(-100, 1300)
      append(missileX, randnumX)
       
      randnumY= random(-10, -400)
      append(missileY, randnumY)
      console.log(missileY)
    }
    if (ingame = true){
      for (var i = 0; i <= 25; i ++){
        missileSprite = new Array;
        missileSprite[i] = createSprite(missileX[i], missileY[i])
        missileSprite[i].addImage(missileArr)
        missileArr.resize(10, 10)
        missileSprite[i].addToGroup(missile)
        missileSprite[i].setSpeed(1, random(0, 180))
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
  text("Score:" + score, 80, 660);
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
    bulletSprites.addToGroup(bullet);
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

function spriteOverlap(){
if (bullet.overlap(missile)){
  bulletSprites.remove(bullet)
  score += 10
  }
}




