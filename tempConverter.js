
// Step #1: Explain rules to the user
console.log(`
The converter will ask for the following 3 inputs:

    1. Initial temperature (as a number)
    2. Initial temperature unit (Fahrenheit, Celsius, Kelvin)
    3. Final temperature unit (Fahrenheit, Celsius, Kelvin)

If any inputs are invalid, the program will notify and allow you to retry a new input.
`);

// Step #3: asking for input 3 times. Declare a function to re-use for this
function getInput(question) {}

// Step #2: variables for inputs (data we are taking in)

// starting temperature (number and unit)
let startingTemp;
let startingUnit;

// final temperature (only unit, final number is an output)
let finalUnit;