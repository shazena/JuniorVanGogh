function welcome(x, y, w, h, c1, c2) {

  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
  fill(255);
  textSize(height * 0.03);
  text("Press Enter to Start Painting", width / 2, height * 0.9)
  textSize(height * 0.08);
  textFont(introFontA);
  text("Are you ready to become...", width / 2, height * 0.3);
  textSize(height * 0.16);
  textFont(introFontE);
  text("Junior Van Gogh?", width / 2, height * 0.5);
}