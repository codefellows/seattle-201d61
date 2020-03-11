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
- See review folder

## Wireframe Excersice

- Make sure your content adequately supports your design!

```html

<body>

  <!-- parent element -->
  <header>

    <!-- Children -->
    <a>Link1</a>
    <a>Link1</a>
    <a>Link1</a>
  </header>
</body>
```

- If we want to style a group of element, it's often helpful to group them in a parent that we can style discretely give styling specifications to.


```html

<!-- parent element -->
  <header>

    <!-- A single Child-->
    <div id="nav">
      <!-- Postionable elements that only have to position themselves relative to each other -->
      <a>Link1</a>
      <a>Link1</a>
      <a>Link1</a>
    </div>
  </header>

```

## Covid-19

- Temporary closure of campus for incoming complications
