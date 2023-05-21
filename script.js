//Sets of characters (includes upper/lowercase, numbers, and specialcase characters) going into bucket
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password  characters are being created, stored, and generated
function generatePassword() {
  var characterBucket = []
  var finalPassword = []

//Users are being asked questions to create password
var passwordLength = prompt("How long would you like your password? Must be between 8-128 characters")
var numbers = confirm("Would you like numbers in your password? Click OK for Yes or Cancel for No")
var lowercase = confirm("Would you like numbers in your lowercase characters? Click OK for Yes or Cancel for No")
var uppercase = confirm("Would you like numbers in your uppercase characters? Click OK for Yes or Cancel for No")
var specialChars = confirm("Would you like numbers in your special characters? Click OK for Yes or Cancel for No")


//After user answers questions character bucket retrieves characters for password to be generated
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


//Loop created in order to randomly select characters from all selected if statements to generate password
for (var i=0; i < passwordLength; i++){
  var grabRandomIndex = Math.floor(Math.random() * characterBucket.length) 
  //math random * characterbucket.length of characters creates random index
  var indexValue = characterBucket[grabRandomIndex]
  
  finalPassword.push(indexValue)
}
console.log(finalPassword)
// join characters from character bucket to generate final password!
  return finalPassword.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



