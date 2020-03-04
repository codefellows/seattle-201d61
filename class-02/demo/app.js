'use strict';

// Conditional logic in JS
//  Checking whether a condition is met, and running specific operations based on that condition!

var name = "Alistair";

console.log(name.toLowerCase());
// if (name == 'Jacob') {
//   alert('hey Jacob!');
// } else if (name == 'Alistair') {
//   alert('Hello Alistair');
// } else {
//   name = prompt('who are you?');
// }

// if (name.length) {
//   alert('hello ');
// }

switch (name) {
  case 'Jacob':
    alert('hey Jacob');
    break;
  case 'Alistair':
    alert('Hello Alistair');
    break;
  default:
    name = prompt('Who are you?');
}