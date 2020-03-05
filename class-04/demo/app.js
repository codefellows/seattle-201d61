'use strict';

// asking questions and checking answers

//  The old way
// var answer1 = prompt('Do I like to drive?');
// var correct = 'yes';
// answer1 = answer1.toLowerCase();
// if (answer1 === correct) {
//   alert('Correct!!!!');
// } else {
//   alert('wrong');
// }

function askQuestion(question, correct) {
  var answer = prompt(question);
  if (answer === correct) {
    alert('Correct!!!!');
  } else {
    alert('wrong');
  }
}

function askMultipleQuestion(question, correctArray, attempts) {
  // nested within a loop for attempts
  var answeredCorrectly = false;
  attemptsLoop: while (attempts > 0 && answeredCorrectly === false) {
    var answer = prompt(question).toLowerCase();
    attempts--;

    for (var i = 0; i < correctArray.length; i++) {
      if (answer === correctArray[i]) {
        alert('Correct!!');
        answeredCorrectly = true;
        break attemptsLoop;
        // attempts = 0;
      }
    }

    if (answeredCorrectly == false) alert('Sorry try again.');
  }
}

// The new way 
// askQuestion('Do I like to drive?', 'yes');
// askQuestion('Do I like fried chicken', 'yes');
askMultipleQuestion(
  'What is a color of the rainbow',
  ['red', 'orange', 'blue', 'yellow', 'green', 'indigo', 'violet'],
  4
);

