function Button(i) {
  //these buttons will be scalable to the canvas size and as such, reference the width and the height of the canvas.
  this.x = width * ((i + 1) / 5);
  this.y = height - 40;
  this.width = width / 8;
  this.height = 30;
  this.text = ["Paint Brush", "Tree Brush", "Star Brush", "Clear"];
  this.show = function() {
    noStroke();
    rect(this.x, this.y, this.width, this.height);
    text(this.text[i], this.x, this.y) //uses the index number of the button to select the text for the button from the array above.
  };
} 