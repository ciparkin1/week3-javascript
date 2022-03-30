
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//GIVEN: a application that give a random generated password of 8 to 128 characters


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//STEP 1:I click the button to generate a password
//STEP 1 b: I am presented with a series of prompts for password criteria
//STEP 1 c: I select which criteria to include in the password
//STEP 1 d: prompted for the length of the password

function generatePassword() {
  alert ("generate password");

//STEP 2 b: THEN I choose a length of at least 8 characters and no more than 128 characters

  var length = parseInt(
    prompt('How many characters would you like your password to contain? This must be added as a number'),
    
  );

 if (length < 8) {
   alert ('must be over 8 characters');
   return null;
 } 

 if (length >128) {
  alert ('must be under 128 characters');
  return null;

 }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}



//STEP 3 a: WHEN asked for character types to include in the password


//STEP 3 b:THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//STEP 4:THEN my input should be validated and at least one character type should be selected
//STEP 5:THEN a password is generated that matches the selected criteria
//STEP 6 a:WHEN the password is generated
//STEP 6 b:THEN the password is either displayed in an alert or written to the page

