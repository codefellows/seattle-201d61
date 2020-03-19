# Class 14

## Warm Up

- repl.it
  - Create a form that saves the information that users type.
    - Two inputs
      - title
      - description
    - Whenever the user comes back to our webpage, the inputs will display all the information they previuosly typed.
      - Use localStorage to save user inputs, and populate the form with the stored values.

- Completed on repl.it: https://repl.it/@JacobKnaack/FunctionalPartialPublishers

```js
// app.js
'use strict';

// Grabbing all form elements
var formEl = document.getElementById('persistentForm');
var titleInputEl = document.getElementById('title');
var descriptionInputEl = document.getElementById('description');

// grab data from localStorage
var titleFromStorage = localStorage.title;
var descriptionFromStorage = localStorage.description;

// setting of input value from localStorage
if (titleFromStorage) {
  titleInputEl.value = titleFromStorage;
}
if (descriptionFromStorage) {
  descriptionInputEl.value = descriptionFromStorage;
}

// find input values
// store them in localStorage
function handleInputValue(event) {
  var userInput = event.target.value;
  
  localStorage.setItem(event.target.name, userInput);
}

formEl.addEventListener('submit', function() {
  console.log('form submitted');
});

titleInputEl.addEventListener('input', handleInputValue);
descriptionInputEl.addEventListener('input', handleInputValue);

```

```html
<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Persistent Form</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1>My Persitent Form!</h1>
  <form id="persistentForm">
    <input
        id="title"
        name="title"
        type="text"
        placeholder="title"  
      >
      <input
        id="description"
        name="description"
        type="text"
        placeholder="description"
      >
      <input type="submit">
    </form>
    <script src="script.js"></script>
  </body>
</html>
```

## Code Review

- Go through some of the pain points, saving to local storage and resetting values in js.
- see review folder

## CSS Animations

- Making our elements "move".
- Take an element, and reposition it, with some tweening. How does an element appearance differ between states.
- 3 methods for adding an animation:
  - The easiest is with 'transition', 
  - 'Transform' property, which takes a style of transformation (scale, stretching, moving, rotating).
    - Can be combined!
    - They introduce some special units (deg).
  -'Keyframe' animation, uses @keyframe <animation>.
 
## JS Reinstantiation

- We have 2 places where data can live, localStorage ( which is just for storing values), and our in memory JS ( all the JS functionality that our object have ).
- We need to pump data back through our constructors if we want to gain our Object prototype functionality.

```js

function Pokemon(name, health) {
  this.name = name;
  this.health = health;
}
Pokemon.protoype.speak = function() {
  console.log(this.name);
}

var pokemon = new Pokemon('Charizard', 100);
pokemon.speak() // logs the name in our console.
localStorage.setItem(pokemon.name, JSON.stringify(pokemon));

var pokemonFromStorage = JSON.parse(localStorage.Charizard);
pokemonFromStorage.speak() // Gives us a error until we re-instantiate

pokemonFromStorage = new pokemon(pokemonFromStorage.name, pokemonFromStorage.health);
pokemonFromStorage.speak() // Now console logs our name :)
```