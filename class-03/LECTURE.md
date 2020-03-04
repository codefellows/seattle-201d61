# Class 03

## Warm up!

- repl.it
  - Creating a [number guessing game](https://repl.it/@JacobKnaack/number-guessing).

### Comparison Operators

  == (one side equals the other, but value)
  === (One side equals the other, in both type and value)
  != (One side is NOT equal to the other).
  < (is less than)
  > (is greater than)

## Code Review

- Let's wait on this...

## CSS Box Model

- How do we create layouts for our HTML?
  - The properties of our elements, that position our "boxes" around each other.
    - padding: space between the margin and the boxes content. Causes our boxes to grow.
    - border: space between the padding / edge of our content, and the margin. Often has styling / shape
    - margin: The space between the border ( if it exists ) and any other element around our boxs.
    - (height / width): the size of the content.

## Arrays and Loops

- What the heck is an array?
- A bucket of varibles.
- Helpful for storing things that are related to one another.
- Arrays are index based.
- four methods (functions) associated with manipulating an array.
  - push: adds an item to the end of our array
  - pop: removes an item form the end
  - shift: removes an item from the front
  - unshift: adds an item to the front.
  
```js

var instuctor = "Jacob";
var ta = "Alistair";

var contacts = [instructor, ta]; //represents all contacts

contacts.push('some name');

console.log(names[0], names[1]);
```

### Loops

- Running code more than once.
- Arrays and loops are best budss:

```js

for (/* initial value to check | condition to check against initial value | something to do at the end (incrementing our initial value*/) {
  // code that runs over and over again depending on condition
}

for (var value = 0; value < 5; value++) {
  console.log(value);
}

var names = ['Jacob', 'Alistair'];

for (var index = 0; index < names.length; index++) {
  if (names[index] === "Jacob") {
    console.log('Thats our Instructor');
  } else if (names[index][0] === 'A') {
    console.log('Thats our TA, which starts with A');
  }
}

while (/* any condition*/) {
  // code to repeat
}

var reachedEnd = false
while (reachEnd === false) {
  console.log(names);
  if (/* some condition */) {
    reachedEnd = true;
  }
}

reachedEnd = true;

do {
  console.log(names);
} while (reachedEnd === false)

```
