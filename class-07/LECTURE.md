# Class 07

## Code Review

- See review folder

## Object Constructors

- A function that produces an object usins a "template".

```js

// factory
function retObj(name) {
  return {
    name: name,
  }
}

function speak(name) {
  console.log(name);
}

function Pokedex() {
  this.myPokemon = [];
}
Pokedex.prototype.add = function(pokemon) {
  this.myPokemon.push(pokemon);
}

// Our first constructor, simply sets values on 'this'
function Pokemon(name, att, def) {
  var attack = att + def;

  // these will override any defaults
  this.name = name;
  this.attackPower = attack;
  this.health = 100;
}

// Uses a prototype to pass values that are considered defaults
Pokemon.prototype.speak = function() {
  console.log(this.name);
};

// the new keyword signals that we are using a constructor function, and that an object should be returned
var charmander = new Pokemon("charmander", 30, 20);
// reassigns variable to new object
var charmander = new Pokemon("charmander", 40, 20);

console.log(charmander) // { name, health, attack, defense }

```

### JS classes

- We're not going to use this

```js

class Pokemon {
  constructor(name) {
    this.name = name
  }
}

```

## Html tables

- A good set of elements, that organizes data into columns and rows.

```html
<!-- our parent that contains everything -->
<table> 
  <!-- organizes top down using rows -->
  <tr>
    <!-- Within rows we organize by column -->
    <td>here's some data</td>
    <td>here's more data</td>
  </tr>
  <tr>
    <td>
  </tr>
</table>

```

- When we are appending to the dom, we are moving from the bottom right, to the top left

