let Width = 1200;
let Height = 700;
let score = 0;

function setup() {
  createCanvas(Width, Height);

  town = new Group();
  missle = new Group()
  turrent = new Group();
}

function draw() {
  starBackground();
  gameScore();
  buildings();
  shooting();
  MCGame();
}

function starBackground() {
  image(backgroundImg, 0, 0);
}

function buildings() {}
function shooting() {

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

