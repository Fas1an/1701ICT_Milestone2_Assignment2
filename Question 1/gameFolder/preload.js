function preload() {
    //Missile assets - all Spite
    missleLvl1 = loadImage("../Missile/circleLvl1.png");
    missleLvl2 = loadImage("../Missile/circleLvl1.png");
    missleLvl3 = loadImage("../Missile/circleLvl1.png");
    //Town assets - all Spite
    city = loadImage("../Buidling/buildings.png");
  
    //shooters assets - all Spite
    redTurrent = loadImage("../Shooters/shooters.png");
    turrentAud = loadSound("../Audio/spaceship.mp3");
    //background assets
    /* bgAud = loadSound("../Audio/battlesong.mp3");*/
   bgImage = loadImage("../background/background.png"); 
  
    //Intro Music
    //introMusic = loadSound("../Audio/introMusic.mp3")
  
    //Font
    ultraFont = loadFont("../Fonts/Ultra.ttf")
  }