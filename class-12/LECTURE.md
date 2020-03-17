# Class 12

## Announcements

- Project week starts next Monday: think about anything you like to work on?
  - War / card games?
  - Microservice, your app performs a small task and sends a notification.
  - Random medieval fealty generator.

- Examples:
  - Games:
    - Choose your own adventure.
    - Card games, these can be deceptively difficult.
  - Variations on Todo application.
    - User inputs some data and an object is produced.
    - Dog Tinder.
    - Beer Journal.
  - Animation heavy scripted events.
    - You get a prompt, and depending on how you answer and animation occurs.

##  Warm up

- Building a carousel hero Image Rotator.
  - When the page loads, and image appears in the center of our page.
  - There is a element next to the image, that cycles to a new image.
  - The new image just needs to be different.
  - We should be able to see all images eventually.
    - Do we want image order?
    - What makes up and image?

```js

// Create an image array

// Create an image constructor

// Use randomization function to choose a newImage
  // Some conditional logic

```

- nodeElement.textContent: the character values of in the text within the nodeElements openning and closing tags.
- nodeElement.innerHTML: Characters interpretted as HTML within the nodeElements openning and closing tags.

## HTML Canvas

- Element <canvas>: sole purpose for drawing in the HTML document.
  - circles
  - squares
  - Uses javascript to give the developer a context (2d, 3d, vector);
    - Most common is 2d context.
  - The dimensions need to be set explicitly.
    - Not a good way for restyling.
    - Hard to style responsively.


```html

<body>
  <canvas id="my-canvas" width="400" height="500"/>
</body>

```

```css
/* Totally works */
#my-canvas {
  width: 100%;
  height: 100%;
}
```


```js

var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');


// ctx.fillRect(0, 0, 150, 75) draws a rectable within the canvas elements

```

## ChartJS

- Third party library used to for drawing charts.
  - 3rd party Library: someone elses javascript, that we install ourselves
- Installation:
  - CDN: content delivery network
    - the same way we install our own javascript, but instead we use a URL as opposed to a file path


```html

<head>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
  <!-- any javascript loaded after this script tag, will have access to chart js functionality -->
</head>

```

```js
var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Clicks',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of times Rendered',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
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
```

For Busmall:
`[{timesClicked, timeRendered}, ....]`
- How can we traverse the data that we collect in allImages and pull out the various properties?

```js

for (each store in allStores) {
  var clickData = [];
  var labelsData = [];
  var renderData = [];

}


```