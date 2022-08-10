var bg,bg2,form,system,code,security;
var score=0;
var bg ,backg_img;

function preload() {
 
  
  bg= loadImage("heart-star.jpg")
  //load image for the treasure background
  backg_img = loadImage("background.jpeg");
  //music = loadSound('music.mp3');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  security = new Security();
  system = new System();
  var audio = new Audio('lofi-study.mp3');
  audio.play();
  
  
}

function draw() {
  //console.log(mouseX,mouseY);
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Shawty's Points: " + score, 450, 50);
  
// add code for changing the background to the treasure background
  

  if(score ===4) {
    clear()
    background(backg_img)
    strokeWeight(3);
    stroke("white");
    fill("black")
    textSize(40);
    text("MANY MANY HAPPY RETURNS OF THE DAY, BEAUTIFUL!!",200, 200);
    stroke("black");
    fill("white")
    text("HAVE A GREAT DAY AHEAD<<3",400,250);
    fill("red");
    text("I LOVE YOU!!<3",450, 350);
    textSize(30);
    fill("red");
    text("MORE THAN THESE WORDS CAN EVER EXPRESS!!<3",410, 400);

    textSize(20);
    fill("blue");
    text("WITH LOVE:",1204,478);

    strokeWeight(3);
    stroke("white");
    textSize(15);
    fill("black");
    text("~YOUR HOTBOYFIE <3",1200,500);

  }
  drawSprites()
}