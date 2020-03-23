'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    var total = (a + b);
    var sumStatement = ('The sum of ' + a + ' and ' + b + ' is ' + total + '.');
    var totalArray = [total, sumStatement]
    return totalArray;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    var product = (a * b);
    var productStatement = ('The product of ' + a + ' and ' + b + ' is ' + product + '.');
    var productArray = [product, productStatement]
    return productArray;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    console.log ('at beginning' + a +'. '+ b +'. '+ c)
    var firstMultiply = multiply(a, b);
    var tripleProductArray = multiply(firstMultiply[0], c);
    var endProduct = tripleProductArray[0];
    // endProduct = (endProduct + '')
    var tripleMultiplyStatement = ('The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + endProduct + '.');

    var firstSum = sum(a, b);
    var tripleSumArray = sum(firstSum[0], c);
    var endSum = tripleSumArray[0];
    // endSum = (endSum + '');

    var tripleSumStatement = (+ a + ' and ' + b + ' and ' + c + ' sum to ' + endSum + '.');
    var tripleProblemArray = [endSum, endProduct, tripleSumStatement, tripleMultiplyStatement];
    return tripleProblemArray;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."
"2,3,4 was passed in as an array number, and 9 is their sum."
IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
 
    var accumulativeSum = 0;
    var sumArray = sumArr;
    for (var recursiveSum = 0; recursiveSum < sumArray.length; recursiveSum++) {
        var currentNumber = sumArray[recursiveSum];
        var nextNumber = sumArray[(recursiveSum + 1)];
        if (recursiveSum === 0 ) {
            var accumulativeSum = sum(currentNumber, nextNumber);
            console.log(accumulativeSum[1]);
            accumulativeSum = accumulativeSum[0];
            recursiveSum++;
            console.log('if RecursiveSum is: ' + recursiveSum)
        } else {
            accumulativeSum = sum(currentNumber, accumulativeSum);
            console.log(accumulativeSum[1]);
            console.log('else RecursiveSum is: ' + recursiveSum)
            accumulativeSum = accumulativeSum[0];
        }
    }

    var displaySumArrayNumbers = '';
    for (var displayAdd = 0; displayAdd < sumArray.length; displayAdd++) {
        if (displayAdd === 0) {
            displaySumArrayNumbers = (displaySumArrayNumbers + sumArray[displayAdd]);
        } else {
            displaySumArrayNumbers = (displaySumArrayNumbers + ',' + sumArray[displayAdd]);
        }
    }

    var sumArrayStatement = (displaySumArrayNumbers + ' was passed in as an array of numbers, and ' + accumulativeSum + ' is their sum.');
    var recursiveSumArray = [accumulativeSum, sumArrayStatement]
    console.log(recursiveSumArray);
    return recursiveSumArray;
}   
  

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."
[24, "numbers 2,3,4 have a product of 24."]
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

    var accumulativeProduct = 0;
    var productArray = multArr;
    for (var recursiveProduct = 0; recursiveProduct < productArray.length; recursiveProduct++) {
        var currentNumber = productArray[recursiveProduct];
        var nextNumber = productArray[(recursiveProduct + 1)];
        if (recursiveProduct === 0 ) {
            var accumulativeProduct = multiply(currentNumber, nextNumber);
            console.log(accumulativeProduct[1]);
            accumulativeProduct = accumulativeProduct[0];
            recursiveProduct++;
            console.log('if RecursiveProduct is: ' + recursiveProduct)
        } else {
            accumulativeProduct = multiply(currentNumber, accumulativeProduct);
            console.log(accumulativeProduct[1]);
            console.log('else RecursiveProduct is: ' + recursiveProduct)
            accumulativeProduct = accumulativeProduct[0];
        }
    }

    var displayProductArrayNumbers = '';
    for (var displayAdd = 0; displayAdd < productArray.length; displayAdd++) {
        if (displayAdd === 0) {
            displayProductArrayNumbers = (displayProductArrayNumbers + productArray[displayAdd]);
        } else {
            displayProductArrayNumbers = (displayProductArrayNumbers + ',' + productArray[displayAdd]);
        }
    }

    var productArrayStatement = ('The numbers ' + displayProductArrayNumbers + ' have a product of ' + accumulativeProduct + '.');
    var recursiveProductArray = [accumulativeProduct, productArrayStatement]
    console.log(recursiveProductArray);
    return recursiveProductArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

    var accumulativeProduct = 0;
    var productArray = dynamicArray;
    for (var recursiveProduct = 0; recursiveProduct < productArray.length; recursiveProduct++) {
        var currentNumber = productArray[recursiveProduct];
        var nextNumber = productArray[(recursiveProduct + 1)];
        if (recursiveProduct === 0 ) {
            var accumulativeProduct = multiply(currentNumber, nextNumber);
            console.log(accumulativeProduct[1]);
            accumulativeProduct = accumulativeProduct[0];
            recursiveProduct++;
            console.log('if RecursiveProduct is: ' + recursiveProduct)
        } else {
            accumulativeProduct = multiply(currentNumber, accumulativeProduct);
            console.log(accumulativeProduct[1]);
            console.log('else RecursiveProduct is: ' + recursiveProduct)
            accumulativeProduct = accumulativeProduct[0];
        }
    }

    var displayProductArrayNumbers = '';
    for (var displayAdd = 0; displayAdd < productArray.length; displayAdd++) {
        if (displayAdd === 0) {
            displayProductArrayNumbers = (displayProductArrayNumbers + productArray[displayAdd]);
        } else {
            displayProductArrayNumbers = (displayProductArrayNumbers + ',' + productArray[displayAdd]);
        }
    }

    var productArrayStatement = ('The numbers ' + displayProductArrayNumbers + ' have a product of ' + accumulativeProduct + '.');
    var recursiveProductArray = [accumulativeProduct, productArrayStatement]
    console.log(recursiveProductArray);
    return recursiveProductArray;
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
