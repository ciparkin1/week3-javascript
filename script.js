//GIVEN: a application that give a random generated password of 8 to 128 characters
function buttonClicked() {
  console.log("the generate button was clicked")
}
var generateButton = document.getElementById("generate");
// Add event listener to generate button
//STEP 1:I click the button to generate a password
function generatePassword() {

  //test to check working
console.log("hi- this is a test")
//STEP 1 b: I am presented with a series of prompts for password criteria
//STEP 1 c: I select which criteria to include in the password
//STEP 1 d: prompted for the length of the password
//STEP 2 b: THEN I choose a length of at least 8 characters and no more than 128 characters
  var length = parseInt(
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
  var useLowercase = confirm(
    'Please confirm if you would like to include lowercase'
  );
  var useUppercase = confirm(
    'Please confirm if you would like to include uppercase'
  );
  var useNumbers = confirm(
    'Please confirm if you would like to include numbers'
  );
  var useSpecialCharacters = confirm(
    'Please confirm if you would like to include special characters'
  );
  if (
    useSpecialCharacters === false && useNumbers === false && useLowercase === false &&
    useUppercase === false) {
    alert('no characters have been selected, please start again');
    return null;
  }
  
//STEP 4 a:THEN my input should be validated and at least one character type should be selected
//STEP 4 b:THEN a password is generated that matches the selected criteria
  var specialCharacters = ['@','%','+','\\', '/', "'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
    

  var masterArray = [];
  if (useLowercase)
  {
      masterArray = masterArray.concat(lowercase);
  }
  if (useUppercase)
  {
      masterArray = masterArray.concat(uppercase);
  }
  if (useNumbers)
  {
      masterArray = masterArray.concat(numbers);
  }
  if (useSpecialCharacters)
  {
      masterArray = masterArray.concat(specialCharacters);
  }
  //STEP 5 a:WHEN the password is generated
  //STEP 5 b:THEN the password is either displayed in an alert or written to the page
  var newPassword = "";
  for (var i = 0; i < length; i++)
  {
  var randomIndex = Math.floor(Math.random() * masterArray.length);
  newPassword += masterArray[randomIndex];
  }  
  return newPassword;

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
    passwordText.value = password;
}
generateButton.addEventListener("click", writePassword);

