# Class 13

## Code Review

- Joe: console logging from a submission from a form?
  - Can console log the value, but is trying to write the type.
  - Trying to update the chart after it has been rendered to the DOM.
    - Remove Canvas from the document.body and create a new one to draw on.

- Busmall code from Matthew: https://github.com/Pale-Crusader/bus-mall
- see review folder.
- Joe: Getting too high of values for timesClicked
  - Jacob / Kent: Make sure your not calling timesClicked++ in a loop, or in weak conditional logic.

## JSON

- What is JSON?
  - stands foor Java Script Object Notation.  It's simply the syntax that makes a valid object literal.

```js

[
  {
    "name": "Jacob",
    "isInstructor": true,
    "age": 2300,
    "data": [],
    "datasets": [{
        "type": "bar",
    }]
  },
]
// this object literal notation is valid json
```

- The javascript JSON object.
  - Which lets us do specific formatting of types with our javascript.

```js
// this requies an object
JSON.stringify({
    name: "Jacob",
    isInstructor: true,
    data: [],
    datasets: [{
        type: 'bar',
    }]
  }); // gives us a string with all the syntax properties of an object. '{name: "Jacob", isInstructor: true, ...}'
```

- We can also turn a normal string back into and object using JSON.parse()
  
```js

var someString = '{name: "Jacob"}';

// this requires a string
var object = JSON.parse('{name: "Jacob"}') // return type object with proper key values and methods object.name => 'Jacob'
```

## Local Storage

- This is were we can store a very small amount of data(5MB) to our machines, so that data can persist in the browser.
- Storage is based on URL domain in the browser url bar.
  - // root/programFiles/Chrome/appData/....localStorage.

- 4 methods on the localStorage object / all items in localStorage are key value pairs.
  - .clear() removes everything
  - .setItem(keyName, value); puts an item in locaStorage
  - .getItem(keyName); Fetches a value from localStorage
  - .removeItem(keyName): removes a single item

```js

console.log(localStorage);

```
