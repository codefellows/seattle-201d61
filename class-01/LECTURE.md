# Class 01

## Overview

- Welcome to 201, lets go over what we need to succeed.

### Stacked Learning

- Exposition of a concept, demonstration, and then moving on quickly.
- Out next concept will involve the first.

### Canvas

- Career: don't let it sneak up you, please do it.
- Readings: Try and get done before class,  required to get done by the end of the day.
- Learning Journals: A good way to be reflective on your learning journey.

### Github

- What is Github?
  - A website?
  - File cabinet for your work?
  - Let's us share and collaborate.
  - Version Control system? Not quite : leverages version control.
- Git
  - Version control system.
  - It is not the same as github.

### VS Code

- Providing code style specifications with a linter: eslint.
  - Built into VS Code.
  - installed as an extension.
  - Configured with a file: `.eslintrc.json`
  - How to use:
    - create a file called .eslintrc.json in the root of our project folder.
    - Put these contents inside .eslintrc.json.

```json
{
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "eqeqeq": ["error", "always"],
    "no-console": "off",
    "no-undefined": "off",
    "indent": ["error", 2],
    "quotes": ["warn", "single"],
    "no-multi-spaces": [
      "warn",
      {
        "exceptions": {
          "VariableDeclarator": true
        }
      }
    ],
    "no-trailing-spaces": "warn",
    "new-cap": "warn",
    "no-redeclare": [
      "error",
      {
        "builtinGlobals": true
      }
    ],
    "semi": [2, "always"],
    "eol-last": "error"
  }
}
```

### Terminal

- Basic commands
  - `pwd`: print working directory
  - `cd`: change directory
  - `mkdir`: create a directory at a privded path.
  - `touch`: create a file at a provided path.
  - `rm`: remove a file
  - `rm -r`: remove a directory.
  - `cp`: copy a file
  - `mv`: move a file

### HTML and CSS and JS Basics

- Hyper Text Markup Language.
- Semantic Tags?
  - tags that have an indication of what it's contents are.

- Cascading Style Sheets
  - Adds some flavor / personality?
  - How does my content display in the browser
  - Start with a selector: and html element
    - folloed by brackets for the rule;

- Javascript
  - Frustration?
  - Interactivity and event listening.
  - Functionality: http requests, animations, calculations...

```html

<!DOCTYPE html>
<html>
  <head>
    <!-- Meta data -->
  </head>
  <style>
    header {
      width: 100px;
      height: 200px;
    }
    aside {
      color: blue;
    }
  </style>
  <body>
    <header>TOP</header> 
    <aside>SIDE</aside>
    <footer>BOTTOM</footer>
    <script>
    // assigned value, using varible;
    var name = 'Jacob';
    console.log(name);
    </script>
  </body>
</html>
```