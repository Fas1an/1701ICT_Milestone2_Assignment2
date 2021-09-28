function preload(){
    //Missile
    missleLvl1 = loadImage("Missile/circleLvl1.png");
    missleLvl2 = loadImage("Missile/circleLvl1.png");
    missleLvl3 = loadImage("Missile/circleLvl1.png");
    //Town
    cityLvl0 = loadImage("Buidling/cityLvl0.png");
    cityLvl1 = loadImage("Buidling/cityLvl1.png");
    cityLvl2 = loadImage("Buidling/cityLvl2.png");
    cityLvl3 = loadImage("Buidling/cityLvl3.png");
    //shooters
    turrent = loadImage("Shooters/shooter.png");
    turrentAud = loadSound("Audio/spaceship.mp3")
    //background music
    backgroundAud = loadSound("Audio/battlesong.mp3")
}

function setup() {
createCanvas(1000, 700)
background("grey")

}

function draw() {
buildings();
audio();
}


function buildings(){
image(cityLvl3, -100, 300);
image(turrent, 100, 635, 70, 70)
image(turrent, 800, 635, 70, 70)
image(turrent, 400, 635, 70, 70)  
}


function shooting(){
    
}

function audio(){
    backgroundAud.setVolume(0.3)
    backgroundAud.play()
}




