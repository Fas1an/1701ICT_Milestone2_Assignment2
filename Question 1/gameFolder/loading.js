let load = true;
let ingame = false;
let leaderboard = false;
let endgame = false;

function loading(){
    if (load == true) {
    introAud.volume(0.015)
    introAud.play()
    let spaceVidImg = spaceVid.get()
    image(spaceVidImg, 0 , 0)
    title();
    }
    else if (ingame == true)
    {
        introAud.stop()
        battleAud.volume(0.015)
        battleAud.play()
        starBackground()
    }

    else if (endgame == true)
    {
        gameoverAud.play()
    }
    else if (leaderboard == true){


    }
}

function keyTyped(){
    if (load == true && keyCode === ENTER){
      load = false
      ingame = true
    } 
  }

function title(){
    strokeWeight(3);
    stroke(255);
    fill('black');
    textAlign(CENTER);
    textSize(50);
    textFont(ultraFont);
    text('Missile Command', Width/2, Height/2);
    textSize(25);
    text('press enter to start', Width/2, Height/2 + 50);
}