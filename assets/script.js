// create arrays for all character types
var abcUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var abcLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numb = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symb = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];

//set password length to zeo
var length = 0;
//use var to hold possible characters
var possibleCharacters = [];
//use var to hold generated characters
var generatedCharacters = [];

// set paramaters for password
function passwordOptions() {
  //prompt the user to select length of the password
  length = parseInt(
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

  if (upperCase === true) {
    possibleCharacters = possibleCharacters.concat(abcUpper);
  }
  if (lowerCase === true) {
    possibleCharacters = possibleCharacters.concat(abcLower);
  }
  if (hasNumber === true) {
    possibleCharacters = possibleCharacters.concat(numb);
  }
  if (hasSpecChar === true) {
    possibleCharacters = possibleCharacters.concat(symb);
  }
  if (
    upperCase === false &&
    lowerCase === false &&
    hasNumber === false &&
    hasSpecChar === false
  ) {
    alert("You need to include at least one character type!");
    return null;
  }

  //generate a random password
  var generatedPassword = function () {
    //create a function that houses the math random
    for (var i = 0; i < length; i++) {
      var randomOutput =
        possibleCharacters[
          Math.floor(Math.random() * possibleCharacters.length)
        ];
      generatedCharacters = generatedCharacters.concat(randomOutput);
      //password += passwordOptions.substring(randomOutput, randomOutput + 1);
    }
    return generatedCharacters;
  };
  generatedPassword();
  //remove commas and spaces from password by joining them
  var joinedCharacter = generatedCharacters.join("");
  return joinedCharacter;
}

//use this to take user input and generate random length of characters
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", inputPassword);

// Write password to the #password input
function inputPassword() {
  //passwordOptions();
  var password = passwordOptions();
  var passwordText = document.querySelector("#password");
  //place generated password
  passwordText.value = password;
}
