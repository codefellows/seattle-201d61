'use strict';

/*
 prompt for a name
 ask 4? questions
 2 yes or no
 1 number guessing with attempts
 1 multiple correct answers with attempts
     display correct answers when completed.
 tracking a user score
*/

// what functions do we need?
// what variables?

// var username = prompt('what is your name?');
// alert('hello ' + username);

var q1 = [];
var q2 = [];
var q3 = [];
var q4 = [];
var q5 = [];
var questions = [q1, q2, q3, q4, q5];

// var question = 'Am I good an Ping Pong'
// var answer = 'yes';

// question needs to be a string!
function askYesOrNo(question, answer, customRight, customWrong) {

  while (userAnswer !== answer || userAnswer !== answer[0]) {

    var userAnswer = prompt(question + ' Please answer yes or no').toLowerCase();
    // we need to compare, and some variables
    if (userAnswer === answer || userAnswer === answer[0]) {
      alert('Correct!!!');
    } else if (userAnswer === customRight) {
      alert('Thats hilarious!');
    } else if (userAnswer === customWrong) {
      alert('Sorry about that');
    } else {
      alert('wrong!!');
    }

  }
}

// function askYesNoQuestions(questions) {
//   for (let index = 0; index < questions.length; index++) {
//     askQuestion(questions[index]);
//   }

//   // question {Array}
//   function askQuestion(question) {
//     var answer = prompt(question);
//     if (question.includes(answer)) {
//       alert('correct');
//     } else {
//       alert('wrong');
//     }
//   }
// }

// askYesOrNo('Am I good an Ping Pong?', 'yes', 'you bet I am', 'not really');
// askYesNoQuestions(questions);

// question to ask / correct Number answer / number of attempts
function askNumberQuestion(question, correctNumber, attempts) {

  for (attempts; attempts > 0; attempts--) {
    var userAnswer = Number(prompt(question + ' You have ' + attempts + ' attempts'));
    if (userAnswer === correctNumber) {
      alert('Correct!!!');
      break;
    } else if (userAnswer < correctNumber) {
      alert('Too low');
    } else if (userAnswer > correctNumber) {
      alert('Too high');
    } else {
      alert('Invalid Input');
    }
  }
}

// askNumberQuestion('Guess a number between 1 and 10', 6, 4);

// question {String} / answers {Array} of possible correct values / attempts {Number}
function askMultipleAnswer(question, answers, attempts) {

  attemptLoop: for (attempts; attempts > 0; attempts--) {
    var userAnswer = prompt(question);

    for (var answerCheck = 0; answerCheck < answers.length; answerCheck++) {
      if (userAnswer === answers[answerCheck]) {
        alert('correct');
        break attemptLoop;
      }
    }

    alert('incorrect' + ' you have ' + (attempts - 1) + " attempts");
  }

}

// askMultipleAnswer('What are the colors of the rainbow?', ['red', 'blue', 'yellow'], 4);

