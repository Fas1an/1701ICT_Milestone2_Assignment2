//S5132436 Andy Duong
let highscoreJSON;
let bulletArr = [];
let missileArr = [];

function preload() {
  //buildings
  buildingImg = loadImage("../Buidling/buildings.png");

  //turrent
  turrentImg = loadImage("../Shooters/shooters.png");
  bulletArr = loadImage("../Shooters/bullet/bullet1.png");
  /* bulletArr[1] = loadImage("../Shooters/bullet/bullet2.png");
  bulletArr[2] = loadImage("../Shooters/bullet/bullet3.png"); */

  explosionImg = loadImage("../Shooters/bullet/explosion.png");

  //Background
  backgroundImg = loadImage("../background/background.png");

  //font
  ultraFont = loadFont("../Fonts/Ultra.ttf");

  //Audio
  introAud = createAudio("../Audio/introMusic.mp3");
  battleAud = createAudio("../Audio/battlesong.mp3");
  laserAud = createAudio("../Audio/laser.mp3");
  spaceshipAud = createAudio("../Audio/spaceship.mp3");
  gameoverAud = createAudio("../Audio/gameover.mp3");
  loadAud = createAudio("../Audio/loading.wav");

  //Missle
  missileArr = loadImage("../Missile/circleLvl1.png");
  missileFlight = loadImage("../Missile/circleLvl2.png");

  //Video
  spaceVid = createVideo("../Video/spaceship.mp4");
  spaceVid.size(1200, 700);
  spaceVid.loop();
  spaceVid.hide();

  //text
  highscoreJSON = loadJSON("../data/highscore.json");
}
