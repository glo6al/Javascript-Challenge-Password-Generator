// set variables used in the password
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb = "0123456789";
var symbols = "!@#$%^&*_-+=";

//set minimum and maximum vlaues
var passwordLength = function (min, max) {
  (passwordLength = Math.min(12)), Math.max(128);
};

// set paramaters for password
var generatePassword = function (passwordLength, para2) {};

// prompt user to enter values in password input

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

for (var i = 0; i < Array.length; i++) {
  var randomNumber = Math.floor(Math.random() * abc.length);
  password += abc.substring(randomNumber, randomNumber + 1);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
