'use strict';

// Paul: Our global variables that we should be using throughout our application.
var listOfAllImages = [];
var numberOfChancesToVote = 25; // Jacob: Long variable names: This is something that many people like! Some don't
var resultsListEl = document.getElementById('results')
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');

// Possible variables to reference elements that were on the page, before we start re-rendering.
// var prevImage1 = null;
// var prevImage2 = null;
// var prevImage3 = null;
var imageLabelList = [];

// Paul: Grabbing an element with id myChart which we assume to be a canvas element
var ctx = document.getElementById('myChart').getContext('2d');

// Ken: 2 params go in here. Correct!!
// function Chart(contextobject, configurationobject) {
//   configurationobject.type // 'bar'
// }

// Using the chart JS constructor, We pass an object to configure the Chart object.
//      myChart.data.datasets[0].data.push(listOfAllImages[chartIndex].numberOfClicks);

// Olga: I dont run this until after the user has clicked 25 times.
//  also include out number of times rendered with our chart.
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: imageLabelList, // Empty on initialization
        datasets: [{
            label: '# of Votes',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 159, 64, 0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// Joe: Constructor function with 3 parameters, which defines 3 properties
// Pushes the object it creates into a global array
// prototype properties: numberOfClicks, timesRendered
// prototype method: displayCurentVotesInUl 
// creates a list item element
// create some content with properties on 'this'
// sets the text content
// append the list item to the results list.

function MallImageObjectGenerator(displayName, nameAttributeString, imagePathString) {
    this.ulDisplay = displayName;
    this.name = nameAttributeString;
    this.source = imagePathString;
    listOfAllImages.push(this);
    // Joe: is this global (yes! defined on line 10)
    imageLabelList.push(this.ulDisplay);
}

// Peyton: If we put this inside the constructor definition as they are shared.
// Jacob: when we console.log an instance of or MallImageObjectGenerator, these will be hidden unless we specify .numberOfClicks / .timesRendered
MallImageObjectGenerator.prototype.numberOfClicks = 0;
MallImageObjectGenerator.prototype.timesRendered = 0;
MallImageObjectGenerator.prototype.displayCurrentVotesInUl = function () {
    var listChangedEl = document.createElement('li');
    var rewriteContentToList = (this.ulDisplay + ': ' + this.numberOfClicks + ' Vote(s).');
    listChangedEl.textContent = rewriteContentToList;
    resultsListEl.appendChild(listChangedEl);
}

// Joe: Using our constructor to create our object instances.
new MallImageObjectGenerator('R2D2 Bag', 'bag', '/img/bag.jpg'); // a slug
new MallImageObjectGenerator('Banana Slicer', 'banana', '/img/banana.jpg');
new MallImageObjectGenerator('Bathroom Tablet Stand', 'bathroom', '/img/bathroom.jpg');
new MallImageObjectGenerator('Toeless Rainboots', 'boots', '/img/boots.jpg');
new MallImageObjectGenerator('Breakfast All-in-One', 'breakfast', '/img/breakfast.jpg');
new MallImageObjectGenerator('Meatball Bubblegum', 'bubblegum', '/img/bubblegum.jpg');
new MallImageObjectGenerator('Posture Chair', 'chair', '/img/chair.jpg');
new MallImageObjectGenerator('Cthulhu Figurine', 'cthulhu', '/img/cthulhu.jpg');
new MallImageObjectGenerator('Duck Mask For Dogs', 'dog-duck', '/img/dog-duck.jpg');
new MallImageObjectGenerator('Canned Dragon Meat', 'dragon', '/img/dragon.jpg');
new MallImageObjectGenerator('Pencap Silverare', 'pen', '/img/pen.jpg');
new MallImageObjectGenerator('Pet Shoe Mops', 'pet-sweep', '/img/pet-sweep.jpg');
new MallImageObjectGenerator('Pizza Slice Scissors', 'scissors', '/img/scissors.jpg');
new MallImageObjectGenerator('Shark Sleeping Bag', 'shark', '/img/shark.jpg');
new MallImageObjectGenerator('Baby Onsie Mop', 'sweep', '/img/sweep.png');
new MallImageObjectGenerator('Starwars Taun-Taun Sleeping Bag', 'tauntuan', '/img/tauntaun.jpg');
new MallImageObjectGenerator('Canned Unicorn Meat', 'unicorn', '/img/unicorn.jpg');
new MallImageObjectGenerator('USB Tentacle', 'usb', '/img/usb.gif');
new MallImageObjectGenerator('Novelty Watering Can', 'water-can', '/img/water-can.jpg');
new MallImageObjectGenerator('Oblique Wine Glass', 'wine-glass', '/img/wine-glass.jpg');

// Robert: Declaring a function that is used to genrate an image
//   gets a random index from the listofAllImages array (generates a random value * length of array and removed decimal)
//   uses conditional logic to check if rendered images are equal to the image from our random index.
//   while our random image is found in one of our global image variables, were resetting the index
//   only the index is not referring to one of our rendered image, will we return.

// Ryan: when this function first runs, the name attributes on the image DOM elements will be undefined.
function generateRandomImage() {
    var imageIndex = Math.floor(Math.random() * listOfAllImages.length);
    while (
        listOfAllImages[imageIndex].name === image1.name ||
        listOfAllImages[imageIndex].name === image2.name ||
        listOfAllImages[imageIndex].name === image3.name
    ) {
        imageIndex = Math.floor(Math.random() * listOfAllImages.length);
    }
    return listOfAllImages[imageIndex];
}

// Olga: Create a function which returns a random image from generateRandomImage,
//   We set the values of our rendered DOM element to the properties of this random image
//   after we render the generated image, we increase / increment our timesRendered value.
//   we do this same thing for image2, and image3
//   finally we loop through our list of images, and run our display method
//   at the end we decrement our global vote number.
function displayThreeNewImages() {
    var randomlyReplaceImage1 = generateRandomImage();
    image1.src = randomlyReplaceImage1.source;
    image1.name = randomlyReplaceImage1.name;
    randomlyReplaceImage1.timesRendered++;

    var randomlyReplaceImage2 = generateRandomImage();
    image2.src = randomlyReplaceImage2.source;
    image2.name = randomlyReplaceImage2.name;
    randomlyReplaceImage2.timesRendered++;

    var randomlyReplaceImage3 = generateRandomImage();
    image3.src = randomlyReplaceImage3.source;
    image3.name = randomlyReplaceImage3.name;
    randomlyReplaceImage1.timesRendered++;

    for (var resultIndex = 0; resultIndex < listOfAllImages.length; resultIndex++) {
        listOfAllImages[resultIndex].displayCurrentVotesInUl();
    }
    numberOfChancesToVote--;
}

// Peyton: for loop that goes through listOfAllImages, 
//  We are doing something with the chart from chartJS

// Jacob: we are drilling down into our myChart object that was created from chartJS and updating the values within the returned chart object.
function chartDisplayUpdater() {
    for (var chartIndex = 0; chartIndex < listOfAllImages.length; chartIndex++) {
        myChart.data.datasets[0].data.push(listOfAllImages[chartIndex].numberOfClicks);
        console.log(listOfAllImages[chartIndex].numberOfClicks);
    }
}

// Joseph: 1 parameter called event, we clear out our global unordered list.
//    We start a loop through listOfAllImages, and if the image name === the render DOM element we increment the number of clicks
//    after the loop we check our number of votes is greater than zero, if so we update our chart.
//    we also grab some DOM elements and append a thank you message.
function imageClickHandler(event) {
    resultsListEl.innerHTML = '';

    for (var checkIndex = 0; checkIndex < listOfAllImages.length; checkIndex++) {
        if (listOfAllImages[checkIndex].name === event.target.name) {
            listOfAllImages[checkIndex].numberOfClicks++;
        }
    }
    if (numberOfChancesToVote <= 0) {
        chartDisplayUpdater();
        myChart.update();
        var clearArticleEl = document.getElementById('imageDisplayArea');
        var displayThanksParentEl = document.getElementById('thanks');
        clearArticleEl.innerHTML = '';
        var thanksForVotingEl = document.createElement('h1');
        thanksForVotingEl.textContent = ('Thank you for completing this market research survey of potential interest for these amazing products.');
        displayThanksParentEl.appendChild(thanksForVotingEl);
    }
    displayThreeNewImages();
}

displayThreeNewImages();
image1.addEventListener('click', imageClickHandler);
image2.addEventListener('click', imageClickHandler);
image3.addEventListener('click', imageClickHandler);
