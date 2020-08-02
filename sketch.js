function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (let i = 30; i < width - 150; i +=510) {
    for (let j = 50; j < width - 70; j += 70) {
      
      noFill ()
      stroke(i,j,j)
      strokeWeight(2)
      ellipse(width/2, height/2, mouseX+i, mouseY+ j)
      line(i, mouseY, mouseX, j)
    }
  }
    
}