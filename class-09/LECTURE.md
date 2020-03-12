# Class 09

## Review Session

- Salmon Cookies Lab
  - Constructors / Objects / Tables

Paul: Different uses between global variables / global objects vs constructor variables.

 - Which would you prefer;
 - What's your use case;
   - Are we building an application, with an end user.
   - Or, are we just storing and organizing data.

```js

// just some organizes data.
var jacob = {name: "jacob"};

// function 
function Person(name) {
  this.name = name;
};

Persion.prototype.talk = function() {

}
```

## Javascript Events!!

- A big step for our applications user.
- What we were this week was just powered a single js file read top bottom;
  - A little bit of feedback was given.

- Now we are given the power to run our code, to our HTML (An actual interface).
- We are now going to allow our functions, to response to interaction with HTML elements.
- Without these events, we wouldn't be able to build such complex interfaces.


- All of our elements have events associated them.

```html
<!-- index.html -->

<body>
    <p onclick="print()">Click on me</p>
    <p id="clickable">I'm using an event.</p>

    <script src="app.js"></script>
    <script src="events.js"></script>
</body>

```

```js
// app.js

function print(string) {
  console.log(string);
}

// var clickable = document.getElementById('clickable');
document.body.addEventListener('click', function() {
  print('string');
});

function () { print('string' )}; // type = function

print('string'); // type = whatever print returns
clickable.addEventListener('mouseover', dropDown);
```

## HTML Forms

- inputs and buttons
  - Buttons: you click or you don't.
  - Inputs: User is providing character based data.
    - How can we get this?
    - Events have a built in way of handing form info.

- The page reloads after we submit because pages uses to need to refresh their html we content from a request response.
  - In the old days, all html was static and new page would typically so a refresh would.
  - Before the days oof single.

```html

<body>

<!-- Still a normal box element, but with a special attribute -->
<!-- Submission event passes along any information the form holds -->
  <!-- <form onsubmit="print()"> -->
  <form id="person-form">
    <input name="first" type="text"></input>

    <button type="submit">Submit Me</button>
  </form>

  <script src="form.js"></script>
</body>
```

```js

var formEl = document.getElementById('person-form');

function handleForm(event) {

  console.log(event);  
}

formEl.addEventListener('submit', handleForm);

```

