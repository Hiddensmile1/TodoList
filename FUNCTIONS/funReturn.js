// Returning function
function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('CONGRATE YOU DID IT')
            console.log('NEVER GIVE UP!!!')
        }
    }
    else {
        return function () {
            alert('You can do better')
            console.log('TRY AGAIN LATER')
        }
    }
}

/* Result
1.
 {
            alert('You can do better')
            console.log('TRY AGAIN LATER')
};

2.  {
            alert('You can do better')
            console.log('TRY AGAIN LATER')
    };
*/

// reasigning a variable to the value
const mystery = makeMysteryFunc();

// result
// () {
console.log('CONGRATE YOU DID IT')
console.log('NEVER GIVE UP!!!')
// }

// Creating a function that has min and max
function inBetween(num) {
    return num >= 50 && num <= 100
}
// result 
// inBetween(20)
// false
// inBetween(80)
// true

// Factory function is a return of a function
// eg
function isBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// Method
// All methods are functions but not functions are methods
// eg
const myMath = {
    square: function (num) {
        return num * num
    },
    cube: function (num) {
        return num ** 3;
    }
}

// result
// myMath.square
// ƒ (num){
//         return num * num
//     }

// insert value
// myMath.square(5)
// 25
// myMath.cube(10)
// 1000

// Question
/*
Define an object called square,
 which will hold methods that have to do with the geometry of squares. 
 It should contain two methods, area and perimeter 
area should accept the length of a side (all sides are the same in a square)
 and then return the side squared. 
perimeter should accept the length of a side and return that side 
multiplied by 4. */

// result 
const square = {
    area: function (area) {
        return area * area;
    },
    perimeter: function (perimeter) {
        return perimeter * 4
    }
}

// Define an object called hen.  It should have three properties:
// name should be set to 'Helen'
// eggCount should be set to 0
// layAnEgg should be a method which increments the value of 
// eggCount by 1 and returns the string "EGG".  You'll need to use this.

// Result
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg: function () {
        this.eggCount += 1;
        return "EGG";
    }
};

// Answer
// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2