'use strict';

var allCookieStores = [];
var hours = 14;

function CookieStand(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSalesPerCustomer = avgCookie;
  this.hoursOpen = hours;
  this.cookieHours = [];
  allCookieStores.push(this);

  // We should only run this function once per cookie store lifecycle
  this.calculateCookiesPerHour();
}

CookieStand.prototype.calculateCookiesPerHour = function () {
  // find a random number of customers
  // JS random number: 0.26984798327498475
  this.cookieHours = []; // we ran into a bug, and needed to zero out data before we redraw.
  for (var hour = 0; hour < this.hoursOpen; hour++) {
    var randomCustomerHour = Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1) + this.minCust);

    // now that we know customers we can combine with cookiesPerCustomer
    var randomCookieSales = Math.floor(randomCustomerHour * this.avgCookieSalesPerCustomer);
    this.cookieHours.push(randomCookieSales);
  }
  console.log(this.cookieHours);
};

// let a store create it's own table row
//    lets think about the footer
CookieStand.prototype.writeRow = function () {
  var table = document.getElementById('table');
  var cookieSum = 0;

  // Create our first cell
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = this.name;
  row.appendChild(cell);

  // creates all our hourly cells
  for (var hour = 0; hour < this.cookieHours.length; hour++) {
    cell = document.createElement('td');
    cell.textContent = this.cookieHours[hour];
    row.appendChild(cell);
    // cookieSum = cookieSum + this.cookieHours[hour];
    cookieSum += this.cookieHours[hour];
  };

  // Adds our daily total;
  cell = document.createElement('td');
  cell.textContent = cookieSum;
  row.appendChild(cell);
  table.appendChild(row);
};

function writeBottomRow() {
  var table = document.getElementById('table');
  var row = document.createElement('tr');
  var cell = document.createElement('td');
  cell.textContent = 'Totals';
  row.appendChild(cell);
  // loop through allStores
  var allStoresHourlySum = 0;

  // nested loops
  // loops over the number of hours that a store is open
  // for each store add up their hourly total
  for (var hour = 0; hour < hours; hour++) {
    var hourlytotal = 0;
    cell = document.createElement('td');
    for (var store = 0; store < allCookieStores.length; store++) {
      hourlytotal = hourlytotal + allCookieStores[store].cookieHours[hour];
    }
    allStoresHourlySum += hourlytotal

    // appending hourly total cell
    cell.textContent = hourlytotal;
    row.appendChild(cell);
  }

  cell = document.createElement('td');
  cell.textContent = allStoresHourlySum;
  row.appendChild(cell);
  table.appendChild(row);
}

// Add event listeners to my form?

var formEl = document.getElementById('cookie-form');

function handleForm(formInput) {
  formInput.preventDefault();
  var location = formInput.target.location.value;
  var minCust = Number(formInput.target.minCust.value);
  var maxCust = Number(formInput.target.maxCust.value);
  var avgCust = Number(formInput.target.avgCust.value);

  new CookieStand(location, minCust, maxCust, avgCust);
  console.log(allCookieStores);
  renderTable();
}

formEl.addEventListener('submit', handleForm);

new CookieStand('Seattle', 3, 7, 5);
new CookieStand('Lima', 5, 10, 2.4);
new CookieStand('Tokyo', 2, 16, 8.4);
new CookieStand('London', 7, 9, 6.4);

// take this logic and turn it in a function
function renderTable() {
  var table = document.getElementById('table');
  table.innerHTML = null;

  for (var store = 0; store < allCookieStores.length; store++) {
    allCookieStores[store].writeRow();
  }

  writeBottomRow();
}

renderTable();