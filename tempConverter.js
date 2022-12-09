// import module
import * as Functions from "./functions"


// Step #1: Explain rules to the user
console.log(`
The converter will ask for the following 3 inputs:

    1. Initial temperature (as a number)
    2. Initial temperature unit (Fahrenheit, Celsius, Kelvin)
    3. Final temperature unit (Fahrenheit, Celsius, Kelvin)

If any inputs are invalid, the program will notify and allow you to retry a new input.
`);



// Step #2: variables for inputs (data we are taking in)

// starting temperature (number and unit)
let startingTemp = Functions.getInput('What is the starting temperature? ');
let startingUnit = Functions.getInput('What is the starting unit? ');

// final temperature (only unit, final number is an output)
let finalUnit = Functions.getInput('What is the final unit? ');

// Step #4: Process the input (initial --> final). Produce an output.
// Step #5: Display output to the user
console.log(`
The starting temperature was: ${String(startingTemp) + startingUnit}
Converting to ${finalUnit}
The final temperature is: ${Functions.tempConversion(startingTemp, startingUnit, finalUnit)}`);
