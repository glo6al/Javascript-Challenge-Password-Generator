// change all of these to arrays
var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numb = "0123456789";
var symb = "!@#$%^&*_-+=";

var allChars = abc + numb + symb;
var passwordArray = Array(allChars);

// set paramaters for password
function passwordOptions() {
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

var passwordLength = passwordOptions.length;

//generate a random password
var generatePassword = function () {
  //create a function that houses the math random
  for (var i = 0; i < passwordLength; i++) {
    var randomOutput = Math.floor(Math.random() * passwordArray.length);
    password += passwordOptions.substring(randomOutput, randomOutput + 1);
  }
  return password;
  console.log(password);
};

//use this to take user input and generate random length of characters
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", inputPassword);

// Write password to the #password input
function inputPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //place generated password
  passwordText.value = password;
}
