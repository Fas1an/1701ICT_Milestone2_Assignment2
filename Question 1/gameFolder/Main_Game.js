let Width = 1200;
let Height = 700;
function setup() {
  createCanvas(Width, Height)
}

function draw() {
starBackground()
score()
buildings()
shooting()
mouseAim()
loading()

}

function starBackground(){
  image(backgroundImg, 0,0)
}

function buildings() {
  buildingSprite = createSprite(0, 600);
  buildingSprite.addImage(buildingImg)
  


 
} 
function shooting() {

} 
function mouseAim(){
 }

 function keyTyped(){
   if (load == true && keyCode === ENTER){
     load = false
     ingame = true
   } 
 }

 function score(){
   rect(0, 600, 1200, 100)
 }