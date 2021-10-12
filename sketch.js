let spaceX = 20,
  spaceY = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

let seed = 0;
let increment = 0.010;

function draw() {
  background("white");

  const _y = noise(seed) * height
  const _x = noise(seed + 400) * width

  seed += increment

  //horizontal row
  for (let x = 20; x < width; x += spaceX) {
    //vertical column
    for (let y = 20; y < height; y += spaceY) {
      //figure out distance from the mouse
      let d = dist(_x, _y, x, y);
      if (d < 100) {
        fill(0, 32, 255, 100);
        //adjust diam based on distance
        diam = map(d, 0, 100, 50, 1);
      } else {
        fill("pink");
        diam = 10
      }


      ellipse(x, y, diam);
    }
  }
}