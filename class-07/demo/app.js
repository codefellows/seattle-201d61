'use strict';
var pokedex = [];

// create pokemon from a constructor

function Pokemon(name, att, def, specials) {
  this.name = name;
  this.attack = att;
  this.defense = def;
  this.specialAbilities = specials;
  pokedex.push(this);
}

Pokemon.prototype.health = 100;
Pokemon.prototype.speak = function () {
  console.log(this.name.toUpperCase() + '!!!!!!');
}
Pokemon.prototype.evolve = function () {
  console.log(this.name + ' is evolving!!!!');
  if (this.name === 'Charmander') {
    this.name = 'Charmeleon';
  }
}

function writeTable() {
  var tableEl = document.getElementById('table');
  console.log(tableEl);

  // loop to traverse our data storage.
  for (var pokemon = 0; pokemon < pokedex.length; pokemon++) {
    // do pokedex[pokemon];
    // what do?
    var row = document.createElement('tr');

    // how many cells might we need?
    var nameCell = document.createElement('td');
    nameCell.textContent = pokedex[pokemon].name;
    var attCell = document.createElement('td');
    attCell.textContent = pokedex[pokemon].attack;
    var defCell = document.createElement('td');
    defCell.textContent = pokedex[pokemon].defense;
    row.appendChild(nameCell);
    row.appendChild(attCell);
    row.appendChild(defCell);
    tableEl.appendChild(row);
  }
}

var charmander = new Pokemon('Charmander', 50, 40, ["blaze"]);
var bulbasuar = new Pokemon('Bulbasaur', 40, 60, ['Vine Whip']);
console.log(pokedex);
writeTable();

// render pokemon stats to a table