let gameLoad = false;
let load = false;
let ingame = false;
let leaderboard = false;
let endgame = true;
let timer = 0;
let gameTimer = 0;

function MCGame() {
  if (gameLoad == true) {
    background("black");
    textAlign(CENTER);
    fill(255);
    textFont(ultraFont);
    textSize(50)
    text("Loading...", width / 2, height / 2);
    loadAud.play();
    loadAud.volume(0.2)
    timer += 10;

    if (timer == 1000) {
      gameLoad = false;
      load = true;
      loadAud.stop();
    }
  } else if (load == true) {
    introAud.volume(0.3);
    introAud.play();
    let spaceVidImg = spaceVid.get();
    image(spaceVidImg, 0, 0);
    title();
    
  } else if (ingame == true) {
    introAud.stop();
    battleAud.volume(0.03);
    battleAud.play();
    starBackground();
    shooting();
    buildings();
    mouseAim();
    bullets();
    gameScore()
    resetButton()
    spriteOverlap()

    gameTimer += 10
    if (gameTimer === 7000){
    ingame = false  
    endgame = true
    }
    console.log(gameTimer)
  } else if (endgame == true) {
    gameoverAud.play();
    gameLeaderboard()
  }
}

function keyTyped() {
  if (load == true && keyCode === ENTER) {
    load = false;
    ingame = true;
  }

  if (ingame == true && key === 'r') {
    load = true;
    
  }
}

function title() {
  strokeWeight(3);
  stroke(255);
  fill("black");
  textAlign(CENTER);
  textSize(50);
  textFont(ultraFont);
  text("Geo-Command", Width / 2, Height / 2);
  textSize(25);
  text("press enter to start", Width / 2, Height / 2 + 50);
}
