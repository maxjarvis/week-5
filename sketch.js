
function setup() {
  createCanvas(900, 400);
  background(255);
  strokeWeight(5);
}

function draw()  {
  if(mouseIsPressed) {
    if(mouseX>90 && mouseX<150 && mouseY>30 && mouseY<90) {
      fill(0, 255, 0);
    } else {
      fill(255);
    }
  rect(90, 30, 60, 60);

  if(mouseX>330 && mouseX<390 && mouseY>30 && mouseY<90) {
    fill(255, 0, 0);
  } else {
    fill(255)
  }
  rect(330,30, 60, 60)
}
}
