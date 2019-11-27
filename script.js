var passEl = document.querySelector("#password");
var lengthEl = document.querySelector("#length");
var charEl = document.querySelector("#char");
var generateBt = document.querySelector("#generate");
var copyBt = document.querySelector("#copy");

var specialChars = "!#$%&*+=-:;<>?";
var numericChars = "1234567890";
var uppercaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercaseChars = "qwertyuiopasdfghjklzxcvbnm";

var specCharCheck = confirm("Use special characters?");
var numCharCheck = confirm("Use numeric characters?");
var lowerCaseCheck = confirm("Use lowercase characters?");
var upperCaseCheck = confirm("Use uppercase characters?");

var length = prompt("Length of password?");
var characters = "";

function generateCharset() {
    
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
    return charSet;
}

generateCharset();

function generatePassword() {
    var charSet = generateCharset();
    var result = "";
    var passlength = parseInt(length);
	for (var i = 0; i < passlength; i++)
		result += charSet.charAt(Math.floor(Math.random() * charSet.length));
    passEl.textContent = result;
    return result;
}

function doCopy() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}

copyBt.addEventListener("click", doCopy);
generateBt.addEventListener("click", generatePassword);


