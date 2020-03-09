# Class 06

## Feedback

- Things that good:
  - Facilator and TAs are good overall.
  - Looking at different code, working with pairs.

- Things that could be better
  - Time management,
    - Fridays will try and be more Q/A heavy.  Beginning and middle will be more concepts heavy.
  - Coding labs, especially with pairs can feel like theirs no direction.
    - Will try and review readmes for labs and make instructions more specific. 


## Code Review 

- Git branching and functions
- Creating function that do ONLY one specific thing.

## Objects

- Sort array => bucket of things thrown in. But an object needs a location.
  - Organizes by a key and a value

```js

var list = [1, 'Jacob', true];

// An object literal
var Person = { id: 1, name: 'Jacob', isInstructor: true };

```

- Typically theses are created with constructors.
- But for know we define tham with object literals.

### How do we refer to our props?

- We can refer different on the object we have 2 options
  - dot notation
    - Our default for referencing properties
  - bracket notation
    - Offers flexibilty for property names.

```js

// dot notation
Person.name // Jacob
Person.id // 1
Person.isInstructor // true

var JacobsName = Person.name;

var property = 'name';

Person["name"]; // Jacob

```

- Objects can store all types of data that you would generally create in JS, this includes functions!!

```js
var Alistair = {
  name: "Alistair",
  walk:  function() {
    console.log('Jacob is walking now');
  }
}

var Jacob = {
  "name": 'Jacob',
  skills: ["javascript", "html", "underwater basket weaving"], 
  walk: function() {
    console.log(this);
  },
  TA: {name: 'Alistair'},
  banana: ['string1', 'string1']
};

Jacob.walk()
Jacob.TA // { Alistair } 
Jacob.TA.name // Alistair
Jacob.TA
```

- Objects use a prototype to define default properties
- All "things" in javascript use objects to create properties
  - These properties come from a "prototype"

Prototype: A template that all objects have hidden.

- We as developer can manipulate this prototype.

```js

var name = "jacob";

// this comes from the String prototype
name.length

var Person = {
  name: "Jacob"
}

Person.prototype.name = "Some String",

```

### this keyword 'this'

- In an object, refers to the object itself
- Used to grab specific property values, from within the object.

## Javascript DOM

- Our way of putting content FROM js, into our HTML.
- A built in API for representing our content within our business logic.


```js

// global document object

document

document.body // returns the rendered html

var parentElement = document.getElementById('someidattribute');
var childElement = document.createElement('p');

childElement.textContent = 'Here is some text';
// undefined for now, we would have to define element
parentElement.appendChild(childElement);
```

## Random Numbers
```js

Math.random() // 0.38378405768 some number between 0 and 1 not including 1

Math.floor(Math.random()) // Removes all decimal places and rounds number down

Math.floor(Math.random() * (10 + 1)); // number between 0 and 10, multipy random num with the top range value you to randomly generate.

```