# Class 10
JS Debugging CSS Wireframing

## Code Review
- Objects
  - Property 
    - Variable that lives between two curly brackets (or in the object
  - Methods
    - Function that lives inside an object.
    - Can use this, to refer to the object it lives inside
  
```js



var seattleCookieStand = {
  name: "Seattle",
  minCust: 2,
  maxCust: 13,
  avgCookieSalesPerCustomer: 4.3,
  hoursOpen: 14,
  // to output an array of cookies at each hour
  cookieHours: [],

  calculateCookiesPerHour: function() {
    // find a random number of customers
    // JS random number: 0.26984798327498475
    for (var hour = 0; hour < this.hoursOpen; hour++) {
      var randomCustomerHour = Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1) + this.minCust);

      // now that we know customers we can combine with cookiesPerCustomer
      var randomCookieSales = Math.floor(randomCustomerHour * this.avgCookieSalesPerCustomer);
      this.cookieHours.push(randomCookieSales);
    }
    console.log(this.customerHours, this.cookieHours);
  },
}


// only works to assign object properties when combined with new;
function CookieStand(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSalesPerCustomer = avgCookie;
  this.hoursOpen = 14;
  this.cookieHours = [],
  // this.calculateCookiesPerHour = function() {
  //   // find a random number of customers
  //   // JS random number: 0.26984798327498475
  //   for (var hour = 0; hour < this.hoursOpen; hour++) {
  //     var randomCustomerHour = Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1) + this.minCust);

  //     // now that we know customers we can combine with cookiesPerCustomer
  //     var randomCookieSales = Math.floor(randomCustomerHour * this.avgCookieSalesPerCustomer);
  //     this.cookieHours.push(randomCookieSales);
  //   }
  //   console.log(this.customerHours, this.cookieHours);
  // };
}

CookieStand.prototype.allCookieStores = [];
CookieStand.prototype.calculateCookiesPerHour = function() {
  // find a random number of customers
  // JS random number: 0.26984798327498475
  for (var hour = 0; hour < this.hoursOpen; hour++) {
    var randomCustomerHour = Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1) + this.minCust);

    // now that we know customers we can combine with cookiesPerCustomer
    var randomCookieSales = Math.floor(randomCustomerHour * this.avgCookieSalesPerCustomer);
    this.cookieHours.push(randomCookieSales);
  }
  console.log(this.cookieHours);
};

var constructedSeattle = new CookieStand('Seattle');
constructedSeattle.minCust = 50;


```

## JS Debugging in the console
  - The 4 errors that you see in your console
    - syntax error: you have malformed and can't run.
    - type error: You have wrong data type for an operation.
    - Reference Error: Something not defined that your trying to use.
    - Range Error: you performing an operation that is out bounds spacially.


```js

var object = {
  name: 'Jacob',
  age: 2,
}

var array = [1];

var secondIndex = array[1];
console.log(secondIndex);

// try / catch block
// allows us to capture errors and deal with gracefully, instead of blowing up our js.
try {
  var impossibleArray = new Array(-1);
} catch(e) {
  console.log(e);
}

console.log('I made it to the end');


object.push(jacob);
```