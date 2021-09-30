function preload() {
  //buildings
  buildingImg = loadImage("../Buidling/buildings.png")

  //turrent
  turrentImg = loadImage("../Shooters/shooters.png");
  RbulletImg = loadImage("../Shooters/bullet/bullet1.png");
  YbulletImg = loadImage("../Shooters/bullet/bullet2.png");
  BbulletImg = loadImage("../Shooters/bullet/bullet3.png");

  explosionImg = loadImage("../Shooters/bullet/explosion.png")

  //Background
  backgroundImg = loadImage("../background/background.png")

  //font
  ultraFont = loadFont("../Fonts/Ultra.ttf")

  //Audio
  introAud = loadSound("../Audio/introMusic.mp3")
  battleAud = loadSound("../Audio/battlesong.mp3")
  laserAud = loadSound("../Audio/laser.mp3")
  spaceshipAud = loadSound("../Audio/spaceship.mp3")

  //Video
  spaceVid = createVideo("../Video/spaceship.mp4");
  spaceVid.size(1200,700)
  spaceVid.play()
  spaceVid.loop()
  spaceVid.hide()
  }