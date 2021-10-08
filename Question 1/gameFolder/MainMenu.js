let gameLoad = false;
let load = false;
let ingame = true;
let leaderboard = false;
let endgame = false;
let timer = 0;

function MCGame() {
  if (gameLoad == true) {
    background("black");
    textAlign(CENTER);
    fill(255);
    textFont(ultraFont);
    text("Loading...", width / 2, height / 2);
    loadAud.play();
    timer += 10;

    if (timer == 1000) {
      gameLoad = false;
      load = true;
      loadAud.stop();
    }
  } else if (load == true) {
    introAud.volume(0.5);
    introAud.play();
    let spaceVidImg = spaceVid.get();
    image(spaceVidImg, 0, 0);
    title();
    
  } else if (ingame == true) {
    introAud.stop();
    battleAud.volume(0.015);
    battleAud.play();
    starBackground();
    shooting();
    buildings();
    mouseAim();
    bullets();
    missleSpeed()
    resetButton()
  } else if (endgame == true) {
    gameoverAud.play();
  } else if (leaderboard == true) {
    leaderboard()
  }
}

function keyTyped() {
  if (load == true && keyCode === ENTER) {
    load = false;
    ingame = true;
  }
}

function title() {
  strokeWeight(3);
  stroke(255);
  fill("black");
  textAlign(CENTER);
  textSize(50);
  textFont(ultraFont);
  text("Missile Command: Geometry", Width / 2, Height / 2);
  textSize(25);
  text("press enter to start", Width / 2, Height / 2 + 50);
}
