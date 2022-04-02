
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// // Add event listener to generate button
// //STEP 1:I click the button to generate a password
function generatePassword() {

    //test to check working
  console.log("hi- this is a test")
  
  // //STEP 1 b: I am presented with a series of prompts for password criteria
  // //STEP 1 c: I select which criteria to include in the password
  // //STEP 1 d: prompted for the length of the password
  // //STEP 2 b: THEN I choose a length of at least 8 characters and no more than 128 characters
  
  var length = parseFloat(
        prompt('How many characters would you like your password to contain? This must be added as a number'),
        
      );
  
      if (length <8) {
        alert ('your password must be over 8 characters');
        return null;
      } 
  
      if (length >128) {
        alert ('your password must be under 128 characters');
        return null;
      }
    
  
  //STEP 3 a: WHEN asked for character types to include in the password
  //STEP 3 b:THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special character
    