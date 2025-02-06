function bankRobbery() {
    const heroes = ['Spiderman', 'IronMan', 'SuperMan']
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`Please save me, ${hero.toLocaleUpperCase()}`)
        }
    }
    cryForHelp();
}

// Result
// Please save me, SPIDERMAN
// Please save me, IRONMAN
// Please save me, SUPERMAN

// Question
// Define a function that returns the square of a 
// number. Define the function as a function expression,
//  stored in a variable called square.  NOTE: Udemy's 
// coding exercise platform does NOT support the ** 
// operator. 

// answer
const square = function (num) {
    return num * num;
}
