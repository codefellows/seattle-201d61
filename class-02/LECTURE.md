# Class 02

## Overview

- Conditional logic
- Git Stuff
- HTML, CSS

## Canvas stuff

- Learning Journals: a way for the instructional staff to get some feedback on the day to day.
- Quizzes: number 1 published today.
- [Front Row Views](https://frontrowviews.com/Home/Event/VenueDetails/5c383bb1c1b97e0f88375d59)

## Code Review

- See review folder.

## Git Commands

- How does git work?
- Commands:
  - `git init`: make your folder "git-able";
    - creates a .git directory that looks at your files.
  - `git status`: What does git have? is it the same as local?
  - `git add`: stages code for commit (what files / folders are included?)
    - `git add .` - adds all changes in project.
  - `git commit`: saves your changes to git!
    - `git commit -m "some commit message"`
  - `git push`: saves all of our commits up until this point to github (or any other remote git repository)
    - `git push origin master`

## HTML / CSS

- attributes: something that modifies a single HTML tag.
  - `class`: identifier for multiple tags (sharing some sort of heirarchy / properties).
  - `id`: identifying a single element. (Something unique)
- All attributes share the same syntax.
  - attibutename="some value"

```html

<body>
  <h1 id="title">Here is my title<h1>
  <p class="text">text</p>
  <p class="text">More Text</p>
</body>

```

How does this apply?

```css
.text {
  font-size: 200px;
}

#title {
  color: pink;
}
```

## JS conditional logic

- Truthy and Falsey:
  - Things that js evalutate as True:
    - string with a length.
    - Any number besides 0.
    - empty object / array.
    - true
  - Things that js evaluates as False:
    - empty string.
    - the number 0.
    - false.

Basic Data types:

- String
- Number
- Boolean
- null
- undefined
