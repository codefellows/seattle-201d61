'use strict';

// 1 What is our user going to see / interact with
// 2 Put content on the page
//     form
//    3 input
// 3 connect form to html
//    find form element with the DOM
//    add your eventer.

var pokedex = [];

function Pokemon(name, health, attack) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  pokedex.push(this);
}

// put my pokemon data on ouor html
Pokemon.prototype.render = function () {
  var pokedexEl = document.getElementById('pokedex');
  var itemEl = document.createElement('li');
  var text = document.createElement('p');
  text.textContent = this.name + " " + this.health + " " + this.attack;
  itemEl.appendChild(text);
  pokedexEl.appendChild(itemEl);
}


// grabbing our form
var pokemonFormEl = document.getElementById('pokemon');
var buttonEl = document.getElementById('show');

// create an event handlers
function handleForm(event) {
  event.preventDefault();
  var inputs = event.target;

  var newPokemon = inputs.name.value;

  new Pokemon(inputs.name.value, inputs.health.value, inputs.attack.value);
  console.log(pokedex);
}

function handleButton(event) {
  document.getElementById('pokedex').innerHTML = null;

  // loop through our pokedex and jsut call pokemon.render()
  for (var pokemon = 0; pokemon < pokedex.length; pokemon++) {
    pokedex[pokemon].render();
  }
}

// attach event handler 
pokemonFormEl.addEventListener('submit', handleForm);

buttonEl.addEventListener('click', handleButton);
