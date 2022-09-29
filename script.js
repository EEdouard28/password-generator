var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var characterBucket = []
  var finalPassword = []
//Data 
// we need diffrent sets of characters, stored with arrays or strings
  // numbers 
  // lowercase characters
  // uppercase characters
  // special characters
  // how many characters do you want to use
//number of characters
//whether they chose numbers, lower/upper case, special characters...
var passwordLength = prompt("how long would you like your password? Must be between 8-128 characters")
var numbers = confirm("Would you like numbers in your password?")
var lowercase = confirm("Would you like numbers in your lowercase characters?")
var uppercase = confirm("Would you like numbers in your uppercase characters?")
var specialChars = confirm("Would you like numbers in your special characters?")
//do you want to use numbers? yes or no
//do you want to use lowercase characters? yes or no
//do you want to use uppercase characters? yes or no
//do you want to use specialcase characters? yes or no
if (numbers === true) {
  characterBucket = characterBucket.concat(numericCharacters)
}
if (specialChars === true) {
  characterBucket = characterBucket.concat(specialCharacters) 
}
if (lowercase === true) {
  characterBucket = characterBucket.concat(lowerCase) 
}
if (uppercase === true) {
  characterBucket = characterBucket.concat(upperCase) 
}
//put the selected characters together
console.log(characterBucket)
//randomly select characters from all selected to generate password
for (var i=0; i < passwordLength; i++){
  var grabRandomIndex = Math.floor(Math.random() * characterBucket.length)
  var indexValue = characterBucket[grabRandomIndex]
  finalPassword.push(indexValue)
}
console.log(finalPassword)
// put them together
  return finalPassword.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



