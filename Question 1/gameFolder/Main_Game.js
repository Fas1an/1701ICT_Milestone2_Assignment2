let Width = 1200;
let Height = 700;
let score = 0;
let turrentMissleSpeed = 1

function setup() {
  createCanvas(1200, 700);
  starBackground();
  //Town
  bullet = new Group()


  town = new Group();
  
  townSprite1 =  createSprite(150, 535)
  townSprite1.addImage(buildingImg)
  buildingImg.resize(buildingImg.width/1.5, buildingImg.width/1.5)
  town.add(townSprite1)

  townSprite2 =  createSprite(350, 535)
  townSprite2.addImage(buildingImg)
  town.add(townSprite2)

  townSprite3 =  createSprite(850, 535)
  townSprite3.addImage(buildingImg)
  town.add(townSprite3)

  townSprite4 =  createSprite(1050, 535)
  townSprite4.addImage(buildingImg)
  town.add(townSprite4)


  //Turrents
  turrent = new Group();
  shooters = createSprite(600, 570)
  shooters.addImage(turrentImg)
  turrent.add(shooters)

  
}

function draw() {
  gameScore();
  MCGame();
}

function starBackground() {
  image(backgroundImg, 0, 0);
}

function buildings() {
  drawSprites(town)
}
function shooting() {
  drawSprites(turrent)
  drawSprites(bullet)

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
    bulletSprites = createSprite(shooters.position.x, shooters.position.y)
    bulletSprites.addImage(RbulletImg)
    angleMode(DEGREES)
    bulletSprites.setSpeed(1,  270 + atan(mouseY - shooters.position.y, mouseX - shooters.position.x))
    bullet.add(bulletSprites)
    console.log(bullet)
  }
}

function dropMissle(){

}

function resetButton(){
  rsButton = createButton('Reset Game')
  rsButton.position(550, 660)
  rsButton.mousePressed(resetLoad)
}

function resetLoad(){
  load = true;
}

function missleSpeed(){
    speedSlider = createSlider(1, 5, 1, 1)
    speedSlider.position(520, 50)
}