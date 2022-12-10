/* Module for functions

export to main project file*/


// Step #3: asking for input 3 times. Declare a function to re-use for this
 function getInput(question) {

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
        else if ((question.includes('unit')) && (userInput !== 'F' && userInput !== 'C' && userInput !== 'K')  ) {
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
 function tempConversion(initialTemp, initialUnit, finalUnit) {

    // figure out which formula to use based on the inputs

    // initial and final unit are the same. No action to perform
    if(initialUnit === finalUnit) {
        return initialTemp;
    }
    // If starting unit is Fahrenheit
    else if(initialUnit === 'F') {
        return fahrenheitTo(initialTemp, finalUnit);
    }
    // If starting unit is Celsius
    else if(initialUnit === 'C') {
        return celsiusTo(initialTemp, finalUnit);
    }
    // If starting unit is Kelvin
    else {
        return kelvinTo(initialTemp, finalUnit);
    }

}


// Helper Functions for tempConversion function

// converting from fahrenheit
function fahrenheitTo(startingTemp, finalUnit) {

    // Fahrenheit to Celsius
    if(finalUnit === 'C') {
        return (startingTemp - 32) * (5/9);
    }
    // Fahrenheit to Kelvin
    else {
        return (startingTemp-32) * (5/9) + 273.15;
    }
}

// converting from celsius
function celsiusTo(startingTemp, finalUnit) {

    // Celsius to Fahrenheit
    if(finalUnit === 'F') {
        return (startingTemp * (9/5) + 32)
    }
    // Celsius to Kelvin
    else {
        return (Number(startingTemp) + 273.15);
    }
}

// converting from kelvin
function kelvinTo(startingTemp, finalUnit) {

    // Kelvin to Fahrenheit
    if(finalUnit === 'F') {
        return ((startingTemp - 273.15) * (9/5) + 32);
    }
    // Kelvin to Celsius
    else {
        return (startingTemp - 273.15);
    }

}

// export functions to be used in other programs
module.exports = { getInput, tempConversion}
