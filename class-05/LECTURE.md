# Class 05

## Warm Up

- Creating 2 functions
  - 1st: take in a string, return the type that is specified in that string,
    - 'string'
    - 'boolean'
    - 'number'
    - 'array'
    - return a falsey type:
  sample: 'boolean' => false
  sample: 'string' => ''

```js

// 1: we need some way to receive string?
// 2: assign that string a variable
// 3: compare that string to the differnet data types
// 4: if we find a match return the falsey version.

// var stringType = console.log(typeof parameter);

function findAType(string) { '10'

  typeof(string) // 'string'

  // if (string == 'string') {
  //   return '';
  // } else if (string == 'boolean') {
  //   return false;
  // } else if (string == 'number') {
  //   return 0;
  // } else if (string == 'array') {
  //   return [];
  // } else {
  //   return
  // }

  switch(string) {
    case 'string':
      return ''
    case 'boolean':
      return false
    case 'array':
      return []
    case 'number':
      return 0
    default:
      return ???
  }
}

```

## Review

-- See Review Folder

## CSS Styling

- display and position:
  - display: speifies what type of box our element is using:
    - inline: put a box an the same "line" or horizatal plane as siblings, (but size comes from its children)

```html

<span style="display: block">A small string</span>


```

    - inline-block: put the box on the same "line" but liet me set the height and width.
    - block: only have one element on the same horizontal plane, all siblings must move to a new line. ( still be able to give height and width ).
  - position: tells our elements how they should be laid out in reference to their children
    - static: wherever I land is where I will stay.
    - relative: position myself relative to my siblings.
    - absolute: remove me from the layout of siblings.
    - fixed: Remove me completly from the body, and only position me relative to the browser window.

## Git Branching

- A copy of the master branch that exists in parrellel with the master soure code.
