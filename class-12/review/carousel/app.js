'use strict';

// Create an image array
var allImages = [];

// Create an image constructor
function ImageConstructor(name, path) {
  this.name = name;
  this.path = path;
  allImages.push(this);
}

ImageConstructor.prototype.render = function () {
  var imgEl = document.getElementById('carousel');

  imgEl.src = this.path;
  imgEl.name = this.name;
}

new ImageConstructor('cruisin', 'assets/cruisin-goat.jpg');
new ImageConstructor('float', 'assets/float-your-goat.jpg');
new ImageConstructor('away', 'assets/goat-away.jpg');

console.log(allImages);

// Use randomization function to choose a newImage
// Some conditional logic

function randomImage(event) {
  var renderedImage = document.getElementById('carousel');

  // generate a random number between 0 and allImages.length
  var imageIndex = Math.floor(Math.random() * allImages.length);
  // select image from allImages using that number
  var newImage = allImages[imageIndex];

  // validate: make sure newImage is different
  while (newImage.name === renderedImage.name) {
    imageIndex = Math.floor(Math.random() * allImages.length);
    newImage = allImages[imageIndex];
  }

  // return image
  console.log(newImage);
  return newImage;
}

function renderImage(image) {
  var imgEl = document.getElementById('carousel');

  imgEl.src = image.path;
  imgEl.name = image.name;
}

// function getNextImage() {

// }

var buttonEl = document.getElementById('rand');

buttonEl.addEventListener('click', function () {
  var image = randomImage();
  image.render();
  // renderImage(image);
});
