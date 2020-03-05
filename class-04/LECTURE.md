# Class 04

```js
var array = [
  [1, 2],
  [3, 4]
]

var array2 = [1, 2, 3, 1];

for (var row;) {
  for (var column;) {
    array[row][column]
  }
}
```

## Review

- Thanks Kent!

## Functions

- Variables for javascript operations

```js

var number = 20;


// function declaration
function functionName() {
  console.log('I am a function!');
}

// function invocation
functionName();


// A function declared with one parameter

/**
* @params {String} name: the name that we print to the console
* @return {undefined}
*/

function greeting(name) {
  console.log('Hello ' + name);
}

// A function invoked with an argument
greeting("Not Jacob"); // Hello Jacob/

var name = "Not Jacob";

// functions return values when they need to pass the result of ther operations to something.
function add(a, b) {
  var result = a + b;
  return result;
}

// how to return multiple things
function createName(name1, name2) {
  var name1Upper = name1.toUpperCase();
  var name2Upper = name2.toUpperCase();
  return [name1Upper, name2Upper];
}

// function scope: where are variables availabel to us?

// globally scoped;
var userscore = 0;

function calcResult(num) {
  userscore = userscore + num;

  return userscore;
}

console.log(userscore)

function retBool(a,b) {

  return (a < b);
}

// IIFE : Immediately Invoked Function Expression

// anonymous function invoked immediately
(function () {
  return 1 + 2;
})();

```
