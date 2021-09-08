var agents = [];
var agentCount = [];  //the number of agents
var noiseScale = 300; //the scale of the noise/seed
var noiseStrength = 10; //how powerful the noise pull the agents
var overlayAlpha = 10;  //rectangle overlay value
var agentAlpha = 90;  //makes the stroke of the agents "transparent"
var strokeWidth = 0.3;  //The width of the agents
var drawMode = 1; //drawMode starts at mode 1
var agentColor = [];
var imgColor = [];
var imgKey = 1;

function preload() {
  img1 = loadImage('assets/aw_man.gif');
  img2 = loadImage('assets/unknown.png');
  img3 = loadImage('assets/worm.png');
  img4 = loadImage('assets/Figure_10_05_04a.jpg');
  img5 = loadImage('assets/unknown_10.png');
  img6 = loadImage('assets/Screenshot_20200221_154338.jpeg');
  img7 = loadImage('assets/Dababy_BabyOnBaby.jpeg');
  img8 = loadImage('assets/IMG_20191126_150016.jpeg');
  img9 = loadImage('assets/heco_wip.png');
  img10 = loadImage('assets/andreas.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);  //makes the canvas fit to the window
  agentCount = (width*height)/250;
  for (var i = 0; i < agentCount; i++) {  //makes it so every agents has there own specific number
    agents[i] = new Agent();
  }
}

function draw() {
  fill(255, overlayAlpha);  //fill(grey, [alpha]), it makes the background white and "transparent"
  noStroke();
  rect(0, 0, width, height);  //the rectangle is the background and it has a "transparency"
  
  // Draw agents
  for (var i = 0; i < agentCount; i++) {  //--!--
    if (drawMode == 1) { 
      agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    }
    if (drawMode == 2) {
      agents[i].update2(strokeWidth);
    }
    if (drawMode == 3) {
      agents[i].update3(strokeWidth);
    }
  }  
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');  //when 's' is released you save an image
  if (key == '1') drawMode = 1; //when '1' is released the program uses drawMode 1
  if (key == '2') drawMode = 2; //when '2' is released the program uses drawMode 2
  if (key == '3') drawMode = 3; //when '3' is released the program uses drawMode 3
  if (key == ' ') { //when 'space' is released the program gets a new random noise seed
    var newNoiseSeed = floor(random(10000));
    noiseSeed(newNoiseSeed);
  }
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255); //when delete or backspace is released the screen clears

  if (key == 'q' || key == 'Q') imgKey = 1;
  if (key == 'w' || key == 'W') imgKey = 2;
  if (key == 'e' || key == 'E') imgKey = 3;
  if (key == 'r' || key == 'R') imgKey = 4;
  if (key == 't' || key == 'T') imgKey = 5;
  if (key == 'y' || key == 'Y') imgKey = 6;
  if (key == 'u' || key == 'U') imgKey = 7;
  if (key == 'i' || key == 'I') imgKey = 8;
  if (key == 'o' || key == 'O') imgKey = 9;
  if (key == 'p' || key == 'P') imgKey = 10;
}
