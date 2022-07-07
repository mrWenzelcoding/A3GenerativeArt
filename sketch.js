let x1,y1;
let r,g,b;
let sze;
let sped;
let xoff;

function setup() {
  createCanvas(600, 600);
  noStroke();
  angleMode(DEGREES)

  x1=width/2
  y1=height/2
  sze=30
  sped = 1
  r=0
  g=0
  b=0
  xoff=0
}

function draw() {
  //background(40, 95, 160, 25);
  fill(8,noise(xoff+150)*150,noise(xoff)*150)
  ellipse(300*cos(x1) + width/2,300*sin(y1)+height/2,sze)
  ellipse(300*cos(x1+180) + width/2,300*sin(y1+180)+height/2,sze)
  ellipse(300*cos(x1+90) + width/2,300*sin(y1+90)+height/2,sze)
  ellipse(300*cos(x1+270) + width/2,300*sin(y1+270)+height/2,sze)
  ellipse(300*cos(x1)+width/2, height/2,sze)
  ellipse(width/2, 300*sin(y1) + height/2, sze)
  ellipse(300*cos(x1+180)+width/2, height/2,sze)
  ellipse(width/2, 300*sin(y1+180) + height/2, sze)
  x1++
  y1++
  if(sze>200){
    sped = random(-2,0)
  }
  if(sze<0){
    sped = random(0,2)
  }
  sze+=sped
  xoff+=0.01
  
  
}

function mousePressed(){
  noLoop();
}