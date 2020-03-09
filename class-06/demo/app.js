'use strict';

var charmander = {
  name: 'Charmander',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  blaze: function () {
    console.log(this.name + ' is POWERED UP!!!');
  }
};

var slowpoke = {
  name: 'Slowpoke',
  img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png',
  oblivious: function () {
    console.log('I cant be infatauted or taunted');
  }
};

// Grabbing our list from the DOM
var pokemonList = document.getElementById('my-pokemon');

// Create all our elements
var charmanderEl = document.createElement('li'); // <li></li>
var charmanderImg = document.createElement('img');
var charmanderText = document.createElement('p');

// Add the approriate content
charmanderText.textContent = charmander.name;
charmanderImg.src = charmander.img;

// append to created elements
charmanderEl.appendChild(charmanderText);
charmanderEl.appendChild(charmanderImg); // <li><p>Charmander</p><img src=""></li>


var slowpokeEl = document.createElement('li');
slowpokeEl.textContent = slowpoke.name;


// Make sure all elementss are attached back to our HTML
pokemonList.appendChild(charmanderEl);
pokemonList.appendChild(slowpokeEl);


console.log(pokemonList);