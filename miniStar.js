function MiniStars() {
    this.x = random(0, (0.8* width));
    this.y = random(0, (0.6 * height));
    this.appear = function() {
      stroke(random(100,255));
      strokeWeight(floor(random(0,3)));
      point(this.x, this.y);
    }
}


//function to create the mini-stars that run at the setup
