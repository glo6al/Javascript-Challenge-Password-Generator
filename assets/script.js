// change all of these to arrays
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb = "0123456789";
var symb = "!@#$%^&*_-+=";

var lettersArray = abc.split(" ");
var numbersArray = numb.split(" ");
var symbolsArray = symb.split(" ");
//combine the arrays together to create a new array
var passwordArray = lettersArray.concat(numbersArray, symbolsArray);

// link generate button to function generatePassword
var generateBtn = document.querySelector("#generate");

//set var to call on user input
var options = passwordOptions();

//set minimum and maximum vlaues
//var passwordLength = function (min, max) {
//  (passwordLength = Math.min(8)), Math.max(128);
//};
generateBtn.addEventListener("click", inputPassword);
// set paramaters for password
function passwordOptions() {
  // Add event listener to generate button
  //prompt the user to select length of the password
  var length = parseInt(
    prompt(
      "How many characters do you want your password to be? Choose a number between 8 and 128"
    )
  );
  //conditional statement to check if user inputs as number
  if (Number.isNaN(length)) {
    alert("Please enter a number!");
    return null;
  }
  //conditional statement to check that password is at least 8 characters
  if (length < 8) {
    alert("Please enter a password at least 8 characters!");
    return null;
  }
  //conditional statement to check that password is at most 128 characters
  if (length > 128) {
    alert("Please enter a password that is less than 128 characters!");
    return null;
  }
  //prompt user to select has lowercase
  var lowerCase = confirm(
    "Click OK if you want to include a lowercase in your password?"
  );
  //prompt user to select has uppercase
  var upperCase = confirm(
    "Click OK if you want to include a uppercase in your password?"
  );
  //prompt user to select has number
  var hasNumber = confirm(
    "Click OK if you want to include a number in your password?"
  );
  //prompt user to select has special characters
  var hasSpecChar = confirm(
    "Click OK if you want to include a special character in your password?"
  );
  //conditional statement to check that password has at least one character type
  if (
    lowerCase === false &&
    upperCase === false &&
    hasNumber === false &&
    hasSpecChar === false
  ) {
    alert("Please select at least one character type");
    return null;
  }
  var userPasswordInput = {
    length: length,
    lowerCase: lowerCase,
    upperCase: upperCase,
    hasNumber: hasNumber,
    hasSpecChar: hasSpecChar,
  };
  return userPasswordInput;
}
passwordOptions();

//generate a random password
var generatePassword = function () {
  //set the length of the password that will be generated
  var passwordLength = passwordOptions.length;

  //generate random set of characters
  for (var i = 0; i < passwordLength; i++) {
    var randomOutput = Math.floor(Math.random() * passwordArray.length);
    password += lettersArray.substring(randomOutput, randomOutput + 1);
  }
  return generatePassword;
};

//use this to take user input and generate random length of characters

//create a function that houses the math random

// Write password to the #password input
function inputPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //place generated password
  passwordText.value = password;
}
