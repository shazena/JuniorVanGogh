function treeBrush() {
  g2.noStroke();
  g2.fill(random(30, 40), 100, 40);
  for(let i = 0; i < 20; i+=2){
    g2.ellipse(mouseX + (1.3) * i, mouseY + 2 * i, 2, 3)
  }
}

//Here,we drew 20 tiny ellipses that were a bit spaced to create the look of the tree brush