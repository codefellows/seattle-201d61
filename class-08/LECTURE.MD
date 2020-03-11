# Class 08

## Warm Up

- In pairs, create a Pokemon fighting game: (repl.it)
  - Pokemon constuctor, creates an object with 3 properties:
    - name
    - health
    - attack
  - Create one constructor prototype method:
    - Take in a pokemon as a parameter ( call this the target pokemon )
    - return that same pokemon with it's health reduced by the current instance pokemon's attack.

```js

var pokedex = []

function Pokemon(name, health, attack) {
  this.name = string;
  this.health = health;
  this.attack = attack;
  pokedex.push(this);
}

// @param {Pokemon} targetPokemon
Pokemon.prototype.battle = function(targetPokemon) {
  // two pokemon
  targetPokemon.health = targetPokemon.health - this.attack;
  return targetPokemon;
}

var jacob = new Pokemon('Jacob', 100, 50); // "new" keyword triggers constructor powers in the function
var alistair = new Pokemon('Alistair', 80, 80);

jacob.battle(alistair);
alistair.battle(jacob);

```

## Code Review

- Creating Tables from Objects
- See review folde
