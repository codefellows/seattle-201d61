'use strict';

// Store Constructor 
// what methods?

// Identify store locations
// Have a list of store hours

// Display that sales data in a table
// head row for column headings
// footer row for aggregate
// rows for each store that we have made

var allStores = [];
var hours = 14;

function CookieStore(name, minCust, maxCust, avgCust) {

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCust;

  var hourlySales = this.generateHourlySales();

  this.cookiesPerHour = hourlySales.data;
  this.totalCookiesSold = hourlySales.sum;
  allStores.push(this);
}

CookieStore.prototype.hours = hours;

// Calculate average number of cookies sold at each hour for a given store
CookieStore.prototype.generateHourlySales = function () {
  // generate a random number
  var averageCookieSales = [];
  var cookieSalesSum = 0;

  // Calculate daily sum of cookies + sales array
  for (var i = 0; i < this.hours; i++) {
    var hourlyCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    var hourlySales = Math.ceil(this.avgCookiesPerCust * hourlyCustomers);
    cookieSalesSum = cookieSalesSum + hourlySales;
    averageCookieSales.push(hourlySales);
  }

  return {
    data: averageCookieSales,
    sum: cookieSalesSum
  };
}

// Create a row for our table
CookieStore.prototype.writeRow = function () {
  var table = document.getElementById('table');
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  row.appendChild(cell);
  table.appendChild(row);

  for (var sale = 0; sale < this.cookiesPerHour.length; sale++) {
    cell = document.createElement('td');
    cell.textContent = this.cookiesPerHour[sale];
    row.appendChild(cell);
  }

  cell = document.createElement('td');
  cell.textContent = this.totalCookiesSold;
  row.appendChild(cell);
}

function writeFooterRow() {
  // add 
  var dailySum = 0;
  var table = document.getElementById('table');
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = 'Totals';
  row.appendChild(cell);

  for (var hour = 0; hour < hours; hour++) { // loop through hours
    var hourlySum = 0;
    // at some store///
    cell = document.createElement('td');
    for (var store = 0; store < allStores.length; store++) { // Loop through stores
      hourlySum = hourlySum + allStores[store].cookiesPerHour[hour];
    }
    cell.textContent = hourlySum;
    row.appendChild(cell);

    dailySum += hourlySum;
  }

  cell = document.createElement('td');
  cell.textContent = dailySum;
  row.appendChild(cell);
  console.log(hourlySum);
  table.appendChild(row);
  console.log(dailySum);
}

var seattle = new CookieStore('Seattle', 5, 10, 40);
var lima = new CookieStore('Lima', 2, 16, 4.6);
// seattle.writeRow();
// lima.writeRow();

// writeFooterRow();

