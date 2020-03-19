'use strict';

var pokedex = [];

var selectInput = document.getElementById('select');
console.log(selectInput.value);

// Create our contructor
function Pokemon(name, health) {
  this.name = name;
  this.health = health;
  pokedex.push(this);
  localStorage.setItem('pokedex', JSON.stringify(pokedex));
}
Pokemon.prototype.speak = function () {
  console.log(this.name);
}

if (localStorage.pokedex) {
  var pokedexFromStorage = JSON.parse(localStorage.pokedex);
  for (var pokemon = 0; pokemon < pokedexFromStorage.length; pokemon++) {
    new Pokemon(pokedexFromStorage[pokemon].name, pokedexFromStorage[pokemon].health);
  }
} else {
  new Pokemon('Charizard', 100);
  new Pokemon('Bulbasaur', 80);
}

// new Pokemon('Charizard', 100);
// new Pokemon('Bulbasaur', 80);
console.log(localStorage, pokedex[0].speak());