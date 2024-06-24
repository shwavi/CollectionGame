//Move the catcher with the left and right arrow keys to catch the falling objects. 

/* VARIABLES */
let catcher, fallingObject;
let score = 0;

/* PRELOAD LOADS FILES */
function preload(){
  
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  
  
  //Create catcher 
  catcher = new Sprite(200,380,100,20, "k");
  catcher.color = "Purple";
  
  //Create falling object
  fallingObject = new Sprite(100,0,10);
  fallingObject.color = "Blue";
  fallingObject.vel.y = 2;

}

/* DRAW LOOP REPEATS */
function draw() {
  background(224,224,224);
  
  
  // Draw directions to screen
  fill("Blue");
  textSize(12);
  text("Move the \ncatcher with the \nleft and right \narrow keys to \ncatch the falling \nobjects.", width-100, 20);

  // if fallingObject reaches bottom, move back to top
  if (fallingObject.y >= 400) {
    fallingObject.y = 0;
    fallingObject.x = random(400)
    fallingObject.vel.y = random(1,5)
      score = score - 1
  }
  //Move Catcher
  if (kb.pressing("left")) {
    catcher.vel.x = -3;
}  else if  (kb.pressing("right")) {
    catcher.vel.x = 3;
} else {
    catcher.vel.x = 0
}

  // Stop catcher at edge of screen
  if (catcher.x < 50) {
    catcher.x = 50
} else if (catcher.x > 350) {
    catcher.x = 350
}
  //collisions
  if (fallingObject.collides(catcher)) {
    fallingObject.y = 0;
    fallingObject.x = random(400)
    fallingObject.vel.y = random(1,5)
    fallingObject.direction = "down"
    score = score + 1
  } 
  else if (fallingObject.y >= 400) {
    score = score - 1
  }

  //score
  fill("Purple")
  textSize(22)
  text("Score = " + score, 10, 30)

  if (score < 0) {
    fallingObject.y = -300
    fallingObject.x = -300
    catcher.y = -300
    catcher.x = -300

    fill("Purple")
    textSize(30)
    text("You Lose \nTry Again!", 120, 200)
    systemExit(0)
  }


}