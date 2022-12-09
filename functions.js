/* Module for functions

export to main project file*/


// Step #3: asking for input 3 times. Declare a function to re-use for this
export function getInput(question) {

    // prompt-sync for user input through console
    const input = require('prompt-sync')();

    while(true) {
        // ask user for input
        let userInput = input(question);

        // check input (temperature)
        if((question.includes('temperature'))  && (isNaN(Number(userInput))) ) {
            console.log('Input for temperature is invalid. Try again.');
            continue;
        }
        // check input (unit)
        else if ((question.includes('unit')) && (userInput !== 'F' || userInput !== 'C' || userInput !== 'K')  ) {
            console.log('Input for unit is invalid. Try again.');
            continue;
        }
        // passed conditionals, return input to caller to save
        else {
            return userInput;
        }
    }

}


// Function: process input and produce the output to display to user
export function tempConversion(initialTemp, initialUnit, finalUnit) {

    // figure out which formula to use based on the inputs

}