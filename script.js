// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//GIVEN: a application that give a random generated password of 8 to 128 characters

//STEP 1:I click the button to generate a password
//STEP 1 b: I am presented with a series of prompts for password criteria
//STEP 1 c: I select which criteria to include in the password
//STEP 2 a: prompted for the length of the password
//STEP 2 b: THEN I choose a length of at least 8 characters and no more than 128 characters

//STEP 3 a: WHEN asked for character types to include in the password
//STEP 3 b:THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//STEP 4:THEN my input should be validated and at least one character type should be selected
//STEP 5:THEN a password is generated that matches the selected criteria
//STEP 6 a:WHEN the password is generated
//STEP 6 b:THEN the password is either displayed in an alert or written to the page
