/*
03/20/2020 TechHire Vestibule Final Project 
completed by Shazena Khan and Shantoria Taylor. 
Project Description: An interactive painting program inspired by artist Vincent van Gogh's painting "The Starry Night". We took additional inspiration from previously completed pair projects worked on during the vestibule period. Special thanks to Dave Briccetti and Matt Kane for their tutorials on the custom paintbrushes).
Link to Shazena's blog: https://shazena.wordpress.com/2020/03/20/day-008-009-vestibule-final-project/ 
Link to Shantoria's blog: https://shantoriataylor.wordpress.com 
*/


let moons = [];
let mini = [];
let buttons = [];

let color1;
let color2;


let bg;
let g1;
let g2;
let g3;
let a; //alpha for moon
let w; //width for moon
let whichButton;
let welcomeScreen = true;
let introFontA;
let introFontE;


function preload() {
  bg = loadImage('assets/blurry-night-final.jpg');
  soundFormats('mp3');
  mySound = loadSound('assets/Chopin - Nocturne op.9 No.2.mp3');
  introFontE = loadFont('assets/EnjelinaDemo.ttf');
  introFontA = loadFont('assets/AngelinaDemo.ttf');
}



function setup() {
  createCanvas((24 / 19) * windowHeight, windowHeight);
  image(bg, 0, 0, width, height);
  //color1 = color(2, 13, 120);
  color1 = color(83, 115, 181);
  color2 = color(24, 32, 100);
  //color2 = color(0, 55, 190);



  g1 = createGraphics(width, height);
  g2 = createGraphics(width, height);
  g3 = createGraphics(width, height);
  g1.clear();
  g2.clear();
  g3.clear();

  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  a = 30; //alpha value of moon assignment
  w = 0; //initial width value for moon assignment

  mySound.setVolume(0.1);
  //mySound.play(); 



  function Moon(a, w) {
    this.x = width * (1 - 0.1);
    this.y = height * 0.18;
    this.width = (width * 0.1) + w;
    this.height = (height * 0.126) + w;
    this.r = 254;
    this.g = 252;
    this.b = 215;
    this.a = a;
    this.show = function() {
      noStroke();
      fill(this.r, this.g, this.b, this.a);
      ellipse(this.x, this.y, this.width, this.height);
    }
  }



  for (let i = 0; i < 3; i++) {
    moons[i] = new Moon(a, w);
    a += 30;
    w += 30;
  }



  for (let i = 0; i < 200; i++) {
    mini[i] = new MiniStars();
  }

  for (let i = 0; i < 4; i++) {
    buttons[i] = new Button(i);
  }


  if (welcomeScreen === true) welcome(0, 0, width, height, color1, color2, "X");
} // setup ends here.





function draw() {
  if (welcomeScreen === false) {
    image(bg, 0, 0, width, height);
    image(g1, 0, 0);
    image(g2, 0, 0);
    image(g3, 0, 0);
    for (let i = 0; i < moons.length; i++) moons[i].show();
    for (let i = 0; i < buttons.length; i++) buttons[i].show();
    for (let i = 0; i < mini.length; i++) mini[i].appear();

    if (mouseIsPressed) {
      for (let i = 0; i < buttons.length; i++) buttons[i].selector();

      if ((mouseY < (buttons[0].y - buttons[0].height / 2))) {
        if (whichButton === 0) paintbrush(mouseX, mouseY);
        if (whichButton === 1) treeBrush();
        if (whichButton === 2) starBrush();
      } //end of restricted drawing area 
      if (whichButton === 3) clearCanvas();
    } //end of if(mouseIsPressed)
    
    noStroke();
    fill(moons[0].r, moons[0].g, moons[0].b);
    textSize(height * 0.02);
    textFont('Arial');
    text("Press 's' on your keyboard to save your work", width / 2, height * 0.99);
  } //end of painting mode, not the intro screen
} //end of draw function


function keyPressed() {
  if (keyCode === 83) { //press 's' to save
    save('iAmJuniorVanGogh.jpg');
    welcomeScreen = false;
    clearCanvas();
  }
  if (keyCode === ENTER) {
    welcomeScreen = false;
  }
} //end of keyPressed function