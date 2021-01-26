/*
* This program turn whatever number before the 
* character into extra added characters after it in string.
*
* @author  Wajd Mariam
* @version 1.0
* @since   2020/01/25
*/

// Imports prompt
const prompt = require('prompt-sync')({sigint: true});

// Declaring variables:
  var finalString = "";
  var counter = 0;
  var counter2 = 0;

  // Getting Input:
  console.log('Enter a string:');
  const stringInput = prompt('');
  
  // For loop to check every character in string:
  for (counter = 0; counter < stringInput.length; counter++) {
    try {
        // Determine whether  the character selected  is an int or not:
        if (isNaN(stringInput.charAt(counter)) == false) {
          // If value at counter was number:
          for (counter2 = 0; counter2 < stringInput.charAt(counter); counter2++) {
            finalString = finalString + (stringInput.charAt(counter + 1));
          }
          // If integer is not a number:
        } else {
          finalString = finalString + stringInput.charAt(counter);
        }
      } catch(err) {
      finalString = finalString + stringInput.charAt(counter);
    }
  }
// Printing output:
console.log('');
console.log('Your string is going to be: ' + finalString);
