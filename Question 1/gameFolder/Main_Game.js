let Width = 1200;
let Height = 700;
let highscore = 0

function setup() {
  createCanvas(Width, Height);
}

function draw() {
  starBackground();
  score();
  buildings();
  shooting();
  loading();
}

function starBackground() {
  image(backgroundImg, 0, 0);
}

function buildings() {}
function shooting() {}

function score() {
  fill(0);
  rect(0, 600, 1200, 100);
  textAlign(CENTER);
  textSize(36);
  fill(255);
  stroke(255);
  text("Score:", 65, 660);

  text("Highscore:", 1000, 660);
}
