'use strict';

var allImages = [];

function goatImage(name, imagePath) {
  this.name = name;
  this.imagePath = imagePath;
  this.numClicked = 0;
  this.timesRendered = 0;
  allImages.push(this);
}

// var goat1 = new goatImage('cruisin-goat', '/assets/cruisin-goat.jpg');
// var goat2 = new goatImage('float-your-goat', '/assets/float-your-goat.jpg');
new goatImage('cruisin-goat', '/assets/cruisin-goat.jpg');
new goatImage('float-your-goat', '/assets/float-your-goat.jpg');
new goatImage('goat-away', 'assets/goat-away.jpg');
new goatImage('kissing-goat', 'assets/kissing-goat.jpg');


var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');

// image1.src = goat1.imagePath;
// image1.name = goat1.name;
// image2.src = goat2.imagePath;
// image2.name = goat2.name;

function generateRandomImage() {
  var index = Math.floor(Math.random() * allImages.length);
  while (
    allImages[index].name === image1.name ||
    allImages[index].name === image2.name
  ) {
    index = Math.floor(Math.random() * allImages.length)
  }
  return allImages[index];
}

function renderGoats() {
  // decide what images are currently rendered
  console.log(image1.src);
  console.log(image2.src);

  // generate a new image
  // var randomImageIndex = Math.floor(Math.random() * allImages.length);

  var newImage1 = generateRandomImage();
  image1.src = newImage1.imagePath;
  image1.name = newImage1.name;
  newImage1.timesRendered++;

  var newImage2 = generateRandomImage();
  image2.src = newImage2.imagePath;
  image2.name = newImage2.name;
  newImage2.timesRendered++;
}
renderGoats();

function clickHandler(event) {
  console.log(event.target.name);

  // if (event.target.name === goat1.name) {
  //   goat1.numClicked++;
  //   console.log(goat1);
  // } else if (event.target.name === goat2.name) {
  //   goat2.numClicked++;
  //   console.log(goat2);
  // }
  for (var i = 0; i < allImages.length; i++) {
    if (allImages[i].name === event.target.name) {
      allImages[i].numClicked++;
    }
  }
  renderGoats();
}

image1.addEventListener('click', clickHandler)
image2.addEventListener('click', clickHandler);

