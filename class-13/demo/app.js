'use strict';

// var object = {
//   "name": "Jacob",
// }

// var string = JSON.stringify(object);

// var backFromString = JSON.parse(string);
// var improperJSON = JSON.parse('["string"]');

// console.log(object.name, backFromString.name);

// clearing localStorage

// When do we want to do this?
// localStorage.clear();

// creating an item
// localStorage.setItem("name", "jacob");
// localStorage.setItem("object", JSON.stringify({ name: "Jacob" }));
// localStorage.removeItem('object');
// localStorage.removeItem('');

// console.log(localStorage);
// console.log(localStorage.getItem('object'));
// console.log(localStorage.object);

// this give us an error => JSON.parse(localStorage.name)??;

// var backFromLocalStorage = JSON.parse(localStorage.object);
// console.log(backFromLocalStorage);

// if saving a block of data, think of the variable as LocalStorage keyname
// var bulbasaur = {
//   name: 'Bulbasaur',
//   health: 120,
//   attack: 80,
// };


// any object must be strinified first before storing in localStorage
// var charizard = {
//   name: 'Charizard',
//   health: 100,
//   attack: 60,
// };


var bulbasaur = null;
var charizard = null;

if (localStorage.Bulbasaur) {
  bulbasaur = JSON.parse(localStorage.Bulbasaur);
} else {
  // When do we want to update?
  //   setItem
  bulbasaur = {
    name: 'Bulbasaur',
    health: 120,
    attack: 80,
  };
  localStorage.setItem(bulbasaur.name, JSON.stringify(bulbasaur));
}

if (localStorage.Charizard) {
  charizard = JSON.parse(localStorage.Charizard);
} else {
  // When do we want to update?
  //   setItem
  charizard = {
    name: 'Charizard',
    health: 100,
    attack: 60,
  };
  localStorage.setItem(charizard.name, JSON.stringify(charizard));
}

var pokemon = [bulbasaur, charizard];
localStorage.setItem('pokemon', JSON.stringify(pokemon))

// this now creates a second storage place fo values
console.log(localStorage);

function render(pokemon) {
  var main = document.getElementById('pokemon');
  var container = document.createElement('div');
  container.textContent = pokemon.name;
  main.appendChild(container);
}

render(charizard);
render(bulbasaur);