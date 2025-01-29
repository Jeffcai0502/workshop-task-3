let imgs = [];
let showText = true;
let currentImages = [];

function preload() {
  imgs.push(loadImage('core.jpeg'));
  imgs.push(loadImage('core1.jpeg'));
  imgs.push(loadImage('core2.jpeg'));
  imgs.push(loadImage('core3.jpeg'));
}

function setup() {
  createCanvas(800, 800);
  frameRate(2);
}

function draw() {
  if (showText) {
    background(220);
    textFont("Courier New");
    textSize(30);
    fill(0);
    textAlign(CENTER);
    text("Click to Generate Collage", width / 2, height / 2);
  } else {
    background(220);
    for (let img of currentImages) {
      image(img.image, img.x, img.y, img.width, img.height);
    }
    applyFilters();
  }
}

function mousePressed() {
  showText = false;
  currentImages = [];
  let r1 = random(imgs);
  let r2 = random(imgs);
  while (r2 === r1) {
    r2 = random(imgs);
  }
  currentImages.push(createRandomImage(r1));
  currentImages.push(createRandomImage(r2));
}

function createRandomImage(img) {
  let maxSize = random(200, 500);
  let aspectRatio = img.width / img.height;
  let width, height;
  if (aspectRatio > 1) {
    width = maxSize;
    height = maxSize / aspectRatio;
  } else {
    height = maxSize;
    width = maxSize * aspectRatio;
  }
  let x = random(0, width);
  let y = random(0, height);
  return { image: img, x, y, width, height };
}

function applyFilters() {
  for (let img of currentImages) {
    let filterType = int(random(6));
    switch (filterType) {
      case 0:
        filter(GRAY);
        break;
      case 1:
        filter(THRESHOLD);
        break;
      case 2:
        filter(INVERT);
        break;
      case 3:
        filter(POSTERIZE, int(random(2, 5)));
        break;
      case 4:
        filter(BLUR, random(1, 3));
        break;
      case 5:
        filter(ERODE);
        break;
      case 6:
        filter(DILATE);
        break;
    }
  }
}