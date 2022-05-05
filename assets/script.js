// Assignment code here
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb = "0123456789";
var symbols = "!@#$%^&*_-+=";
var passwordLength = function (min, max) {};
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
