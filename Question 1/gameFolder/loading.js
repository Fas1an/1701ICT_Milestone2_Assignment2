let load = true;
let ingame = false;

function loading(){
    if (load == true) {
    background("blue")
    let spaceVidImg = spaceVid.get()
    image(spaceVidImg, 0 , 0)
    title();
    }
    else if (ingame == true)
    {
        starBackground()
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