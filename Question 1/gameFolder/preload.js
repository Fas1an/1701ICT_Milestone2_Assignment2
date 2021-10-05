let highscoreJSON;


function preload() {
  //buildings
  buildingImg = loadImage("../Buidling/buildings.png");

  //turrent
  turrentImg = loadImage("../Shooters/shooters.png");
  RbulletImg = loadImage("../Shooters/bullet/bullet1.png");
  YbulletImg = loadImage("../Shooters/bullet/bullet2.png");
  BbulletImg = loadImage("../Shooters/bullet/bullet3.png");

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
  gameoverAud = createAudio("../Audio/gameover.mp3")
  loadAud = createAudio("../Audio/loading.wav")

  //Video
  spaceVid = createVideo("../Video/spaceship.mp4");
  spaceVid.size(1200, 700);
  spaceVid.loop();
  spaceVid.hide();

  //text
  highscoreJSON = loadJSON("../data/highscore.json")
}
