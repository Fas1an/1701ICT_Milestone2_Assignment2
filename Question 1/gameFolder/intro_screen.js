function introScreen(){
    if (startGame == true) {
        //introMusic.volume(0.5)
        //introMusic.play();
    }
  }
  function title(){
    strokeWeight("3");
    stroke("red");
    fill('White');
    textSize(36);
    textFont(ultraFont);
    textAlign(CENTER);
    text('Missile Command', width/2, height/2);
    textSize(24);
    text('press enter to start', width/2, height/2 + 50);
  }
  