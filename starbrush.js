let starBrush = function() {
  for (var i = 0; i < 5; i++) {
    g3.noFill();
    g3.strokeWeight(1);
    g3.stroke(253, 214, 131);
    g3.ellipse(mouseX, mouseY, random(5, 15) * i);
  }
}

//creates the stars that are multiple sets of non-filled ellipses. They are randomly sized, and are placed where the mouse pointer is.