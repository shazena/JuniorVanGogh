/*
03/20/2020 TechHire Vestibule Final Project 
completed by Shazena Khan and Shantoria Taylor. 
Project Description: An interactive painting program inspired by artist Vincent van Gogh's painting "The Starry Night". We took additional inspiration from previously completed pair projects worked on during the vestibule period. Special thanks to Dave Briccetti and Matt Kane for their tutorials on the custom paintbrushes).
Link to Shazena's blog: https://shazena.wordpress.com/2020/03/20/day-008-009-vestibule-final-project/ 
Link to Shantoria's blog: https://shantoriataylor.wordpress.com 
*/

//declaration of empty arrays
let moons = [];
let mini = [];
let buttons = [];

//declaration of global variables to be used by multiple functions in the program
let bg;
let g1;
let g2;
let g3;
let a; //alpha for moon
let w; //width for moon
let whichButton;

//preload function to make sure the background image and the music are ready to go when the program loads
function preload() {
  bg = loadImage('blurry-night-final.jpg');
  soundFormats('mp3');
  mySound = loadSound('Chopin - Nocturne op.9 No.2.mp3');
}


//initialization of canvas and other elements that need to be displayed on it.
function setup() {
  createCanvas((24 / 19) * windowHeight, windowHeight); //creates canvas to a constrained proportion no matter your actual window size
  image(bg, 0, 0, width, height); //loads background image

  //creation of three graphics to make sure the three brushes appear on three separate layers, the paint on the bottom, the tree above, and the star on the uppermost layer
  g1 = createGraphics(width, height); //creates the three graphics that are the same size as the canvas width and height
  g2 = createGraphics(width, height);
  g3 = createGraphics(width, height);
  g1.clear(); //makes these graphics transparent
  g2.clear();
  g3.clear();

  rectMode(CENTER); //centers rectangles
  textAlign(CENTER, CENTER); //centers text
  console.log("Press 's' on your keyboard to save your work."); //Directions so you know how to save your work.

  a = 30; //alpha value of moon assignment
  w = 0; //initial width value for moon assignment

  mySound.setVolume(0.1); //set volume of media
  mySound.play(); //play media 


  //Needs to be in the setup because it references the width and height of the canvas
  function Moon(a, w) {
    //These properties reference the width and height of the canvas to make them scalable.
    this.x = width * (1 - 0.1);
    this.y = height * 0.18;
    this.width = (width * 0.1) + w; //this is used to make the width of the incremental moons greater.
    this.height = (height * 0.126) + w; // same, but for height
    this.r = 254; //sets the color
    this.g = 252;
    this.b = 215;
    this.a = a; //sets the alpha value which I want to increase for every moon to create the halo effect.
    this.show = function() { //shows the moon
      noStroke();
      fill(this.r, this.g, this.b, this.a);
      ellipse(this.x, this.y, this.width, this.height);
    }
  }



  for (let i = 0; i < 3; i++) { //generates and adds the new moon shapes to the array.
    moons[i] = new Moon(a, w);
    a += 30;
    w += 30;
  }

  for (let i = 0; i < moons.length; i++) { //displays the moon on the canvas
    moons[i].show();
  }

  for (let i = 0; i < 200; i++) { //generates the stars and places them in the array.
    mini[i] = new MiniStars();
  }

  for (let i = 0; i < 4; i++) { //generates the four buttons
    buttons[i] = new Button(i);
  }

  for (let i = 0; i < buttons.length; i++) { //shows the four buttons on the screen
    buttons[i].show();
  }
} // setup ends here.





function draw() {

  //"displays" our three clear graphics that we can draw on without drawing on the canvas specifically.
  image(g1, 0, 0);
  image(g2, 0, 0);
  image(g3, 0, 0);

  for (let i = 0; i < mini.length; i++) { //makes stars appear on canvas
    mini[i].appear();
  }

  if (mouseIsPressed) { //The operations here will only happen if the mouse is pressed.
    for (let i = 0; i < buttons.length; i++) { //This is being used to determine which button is being clicked on
      if ((mouseY < buttons[i].y + (buttons[i].height / 2)) && (mouseY > buttons[i].y - (buttons[i].height / 2))) { //this is looking to see if your mouse movements are between the y values of the boxes. They share the same y-values, so it was less code to write this. 
        if ((mouseX < buttons[i].x + (buttons[i].width / 2)) && (mouseX > buttons[i].x - (buttons[i].width / 2))) { //This then checks to see if the mouse is within the bounds of each individual box.
          whichButton = i; //If the box you are on matches the index number, set the variable to that index number. 
        }
      }
    }

    //now that we know which button we're pressing, we can perform the different actions after we press them.
    if ((mouseY < (buttons[0].y - buttons[0].height / 2))) { //This was to restrict the area that the mouse can draw on, so that the brushes don't end up being enabled as soon as the buttons are clicked.
      if (whichButton === 0) paintbrush(mouseX, mouseY); //call the paintbrush function.
      if (whichButton === 1) treeBrush(); //call the tree function
      if (whichButton === 2) starBrush(); //call the star function
    } //end of restricted drawing area so that the brush doesn't activate immediately when the button is clicked
    if (whichButton === 3) clearCanvas();
  } //end of if(mouseIsPressed)
} //end of draw function

function keyPressed() {
  if (keyCode === 83) { //If you press "s" it will save a screenshot of the canvas to your computer
    save('iAmJuniorVanGogh.jpg');
    clearCanvas();
  }
  //Code that was done in an attempt to clear each of the individual graphics layers. Haven't yet found a solution.
  // if (keyCode == 49) {
  //   g1.background(0, 0);
  // }
  // if (keyCode == 50) {
  //   g2.loadPixels();
  //   for (let i = 0; i < width; i++) {
  //     for (let j = 0; j < height; j++) {
  //       g2.set(i, j, color(0, 0, 0, 0));
  //     }
  //   }
  //   g2.updatePixels();
  // }
  // if (keyCode == 51) {
  //   g3.clear();
  // }
}//end of keyPressed function