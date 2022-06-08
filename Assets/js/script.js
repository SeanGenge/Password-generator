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


function generatePassword() {
  // Ask for the length of the password
  var generatedPassword = "";
  var passwordLength = 0;
  var incLowercase = false;
  var incUppercase = false;
  var incNumeric = false;
  var incSpecial = false;
  // Holds all the allowed character types when randomly generating a password
  var allowedCharTypes = [];
  // The list of allowed characters
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var specials = "!@#$%&*+.?";
  
  // Keep prompting until the password length is within range
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Length of the password (8-128 characters): ");
  }
  
  // Prompt for the different character types
  while (true) {
    incLowercase = confirm("Include lowecase letters? Cancel = no");
    incUppercase = confirm("Include uppercase letters? Cancel = no");
    incNumeric = confirm("Include numbers? Cancel = no");
    incSpecial = confirm("Include special characters? Cancel = no");
    
    // One character type needs to be selected
    if (!(incLowercase || incUppercase || incNumeric || incSpecial)) {
      alert("You need to select at least one character type!");
    }
    else {
      if (incLowercase) {
        allowedCharTypes.push("lowercase");
      }
      if (incUppercase) {
        allowedCharTypes.push("uppercase");
      }
      if (incNumeric) {
        allowedCharTypes.push("numeric");
      }
      if (incSpecial) {
        allowedCharTypes.push("special");
      }
      
      break;
    }
  }
  
  // Generate the password randomly
  for (var i = 0; i < passwordLength; i++) {
    // Randomly pick one of the allowed character types and add that to the password
    var randCharType = allowedCharTypes[randomNumber(0, allowedCharTypes.length - 1)];
    
    switch (randCharType) {
      case "lowercase":
        generatedPassword += letters[randomNumber(0, letters.length - 1)];
        break;
      case "uppercase":
        generatedPassword += letters[randomNumber(0, letters.length - 1)].toUpperCase();
        break;
      case "numeric":
        generatedPassword += randomNumber(0, 9);
        break;
      case "special":
        generatedPassword += specials[randomNumber(0, specials.length - 1)];
        break;
    }
  }
  
  return generatedPassword;
}

// Returns a random number, including min and max
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}