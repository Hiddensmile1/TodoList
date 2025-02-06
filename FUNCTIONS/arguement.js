/* Question

Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:

I HATE BEETS
I HATE BEETS
I HATE BEETS
*/

// result

function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}


/* Questions
In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!
Hint: Normally a function will return a value, but for the sake of having this work with the Udemy interpreter we will be using console.log() instead of return, to print the output.
*/

// result
function isSnakeEyes(die1, die2) {
    if (die1 === 1 && die2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

/* questions
It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).  Make sure 
to return the value instead of printing it
*/

// result 
function multiply (x, y){
    return x * y;
   }


   /* question 
   I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather. 

It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 

If temperature is greater than or equal to 75, return true. 

Otherwise, return false.  
*/

// result
function isShortsWeather(temperature){
    if (temperature >= 75){
        return true;
    }
    else{
        return false;
    }
}

/* question 
Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array
 is empty, the function should return null. */

//  result 
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

/* Question
Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized 
(but the rest of the string unchanged) */

// result 
function capitalize(str){
    if (str.length === 0){
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

/* Write a function called sumArray which accepts a single argument: an array of numbers.  
It should return the sum of all the numbers in the array.*/

// result
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;  // Return 0 if the array is empty
    }
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];  // Add each element to the sum
    }
    return sum;
}

/* question 
Write a function called returnDay. this function takes in one parameter 
(a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of
 the week, but for this exercise we will use Monday as the first day. 
 */

//  result 
function returnDay(dayNumber) {
    const daysOfWeek = [
        "Monday",    // 1
        "Tuesday",   // 2
        "Wednesday", // 3
        "Thursday",  // 4
        "Friday",    // 5
        "Saturday",  // 6
        "Sunday"     // 7
    ];

    if (dayNumber < 1 || dayNumber > 7) {
        return null;  // Return null if the number is not between 1 and 7
    }

    return daysOfWeek[dayNumber - 1];  // Array is 0-indexed, so subtract 1 from the input
}