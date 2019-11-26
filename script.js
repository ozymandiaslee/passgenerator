var passEl = document.querySelector("#password");
var lengthEl = document.querySelector("#length");
var charEl = document.querySelector("#char");
var generateBt = document.querySelector("#generate");
var length = parseInt(prompt("Length of password?"));

var specialChars = "!#$%&*+=-:;<>?";
var numericChars = "1234567890";
var uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";

var specialLength = specialChars.length;
var numericLength = numericChars.length;
var uppercaseLength = uppercaseChars.length;
var lowercaseLength = lowercaseChars.length;

function generateCharset() {
    var specCharCheck = confirm("Use special characters?");
    var numCharCheck = confirm("Use numeric characters?");
    var lowerCaseCheck = confirm("Use lowercase characters?");
    var upperCaseCheck = confirm("Use uppercase characters?");
    var charCheckArray = [specCharCheck, numCharCheck, lowerCaseCheck, upperCaseCheck, specialChars, numericChars, uppercaseChars, lowercaseChars];
    var charSet = "";
    for ( var i = 0 ; i < 4; i++) {
        if (charCheckArray[i] === true) {
            charSet += charCheckArray[i+4];
        }
        else {
            charSet = charSet;
        }
    }
    console.log(charSet);
}

generateCharset();

function generatePassword(charSet, length) {
	var result = "";
	for (var i = 0; i < length; i++)
		result += charSet[Math.floor(Math.random() * charSet.length)];
    console.log(result);
}

generateBt.addEventListener("click", generatePassword);


