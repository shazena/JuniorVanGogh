let paintbrush = function(mouseX, mouseY) {
    g1.strokeWeight(4 + random(-1,2));
    g1.stroke(random(30, 80), random(30, 80), random(150, 200));
    g1.line(mouseX, mouseY, pmouseX, pmouseY)
    g1.strokeWeight(3 + random(-1,2));
    g1.stroke(random(90, 100), random(130, 150), random(150, 180));
    g1.line(mouseX, mouseY+4, pmouseX, pmouseY+4)
    g1.strokeWeight(4 + random(-1,2));
    g1.stroke(random(60, 70), random(130, 120), random(100, 180));
    g1.line(mouseX, mouseY+8, pmouseX, pmouseY+8)
    g1.strokeWeight(4 + random(-1,2));
    g1.stroke(random(30, 80), random(30, 80), random(150, 200));
    g1.line(mouseX, mouseY+12, pmouseX, pmouseY+12)
    g1.strokeWeight(3 + random(-1,2));
    g1.stroke(random(90, 100), random(130, 150), random(150, 180));
    g1.line(mouseX, mouseY+16, pmouseX, pmouseY+16)
    g1.strokeWeight(4 + random(-1,2));
    g1.stroke(random(60, 70), random(130, 120), random(100, 180));
    g1.line(mouseX, mouseY+20, pmouseX, pmouseY+20)
  }

//Generator for the paintbrush, it essentially draws a line when you press dow, but then also does it 5 more times for a total of 6 lines to make the wider bristle appearance. The color is also randomized and taken from the original painting.