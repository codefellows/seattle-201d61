'use strict';
// var seattle = [minCookie, maxCookie, avgCookie];
var allStores = [];

var store1 = {
    name: 'Seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,
    totalCookies: [],
    totalCustomers: [],
    cookieSum: 0,
    // generateCustomers: randomNumber,
    // hourOpenPerDay: 14,
    hours: ['6am', '7am', '8am'],

    randomHourNumber: function () {
        //max - min
        //math rondom times difference plus min
        // var difference = (this.maxCustomer - this.minCustomer)
        // var customers = (this.maxCustomer - this.minCustomer);
        // var  = (Math.random() * customers + 1) + this.minCustomer;
        // differenceTimesFloor =  Math.floor(differenceTimes);
        // console.log(differenceTimesFloor);

        var customerPerHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
        console.log(customerPerHour);
        var cookiePerHour = Math.floor(customerPerHour * this.avgCookie);
        console.log(cookiePerHour);
        var cookiesAndCustomerPerHour = [customerPerHour, cookiePerHour];
        console.log(cookiesAndCustomerPerHour);

        return cookiesAndCustomerPerHour
    },

    // calculating average and total customers and cookies per hour a store is open.
    saleTracker: function () {
        // var totalCookieIt = 0;
        // var totalcookie = [];
        // var totalCustomerIt = 0;
        // var totalCustomer = [];

        for (var i = 0; i < this.hours.length; i++) {
            var cookiesAndCustomerPerHour = this.randomHourNumber();
            // do we need to track this?
            // this.totalCustomers.push(cookiesAndCustomerPerHour[0]);
            // totalCustomerIt = totalCustomerIt + cookiesAndCustomerPerHour[0];

            this.totalCookies.push(cookiesAndCustomerPerHour[1]);
            this.cookieSum = (this.cookieSum + cookiesAndCustomerPerHour[1]);
        }

        // customerVar = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer); 

    },
    status: function () {
        console.log(this.totalCookies, this.cookieSum);
    },
    // This function should write all cookie data to the DOM
    write: writeData,
}

function writeData() {
    // where is this element going in our HTML document?
    var listEl = document.getElementById('list');

    // create another element to append to our listEl
    var itemEl = document.createElement('li');

    // what do we want to display?

    // city name
    var nameEl = document.createElement('p');
    nameEl.textContent = this.name;
    itemEl.appendChild(nameEl);
    listEl.appendChild(itemEl);

    var salesList = document.createElement('ul');
    listEl.appendChild(salesList);

    // cookie Value per hour in totalCookies
    for (var i = 0; i < this.totalCookies.length; i++) {
        var hourEl = document.createElement('li');
        salesList.appendChild(hourEl);
        hourEl.textContent = this.totalCookies[i];
    }

    // sum of all cookies
    // create and append a new the bottom of sales list
    var sumEl = document.createElement('li');
    sumEl.textContent = 'total : ' + this.cookieSum;
    salesList.appendChild(sumEl);
}
// allStores.push(store1);
store1.saleTracker();
store1.write();

var store2 = {
    name: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    generateCustomers: randomNumber,
    write: writeData,
}
// randomNumber(3, 24);

// var store3 = {
//     name: 'Dubai',
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookie: 3.7,
//     generateCustomers: randomNumber,
// }
// randomNumber(11, 38);

// var store4 = {
//     name: 'Paris',
//     minCustomer: 20,
//     maxCustomer: 38,
//     avgCookie: 2.3,
//     generateCustomers: randomNumber,
// }
// randomNumber()

// var store5 = {
//     name: 'Lima',
//     minCustomer: 2,
//     maxCustomer: 16,
//     avgCookie: 4.6,
//     generateCustomers: randomNumber,

//     // randomNumber(2, 16);
// }

// // console.log(store1.generateCustomers());

// //min-max range 
// // function randomNumber() {
// //     /// calculate nuber between 23 - 65
// //     return Math.floor(Math.random() * ( + 1));
// // }

// function randomNumber(min, max) {  
//     return Math.random() * (max - min) + min; 

// }  
// // document.write("Random Number between 1 and 5: ")  
//   randomNumber(23, 65);
