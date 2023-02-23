"use strict";
//following function will take alphabets, string and key as parameter 
//It will return encripted character based on input character and key
exports.__esModule = true;
function findEncriptCharacter(alphabets, ch, key) {
    //getting index of input character from alphabets
    var orgIndex = alphabets.indexOf(ch);
    //Calculating index of encripted character
    var rotatedIndex = (orgIndex + key) % 26;
    //getting encripted character and return
    return alphabets.charAt(rotatedIndex);
}
function encriptMessage(message, key) {
    var alphabets = 'abcdefghijklmnopqrstuvwxyz';
    //Creating a string for storing answer
    var encriptedString = "";
    //Assuming that letters in string always be in lower case
    //Still for safety, converting string in lower case
    message = message.toLowerCase();
    var messageLength = message.length;
    for (var i = 0; i < messageLength; i++) {
        var ch = message.charAt(i);
        // As it is geven in questin
        //Cipher only encrypts letters
        // So filtering letters
        if (ch >= 'a' && ch <= 'z') {
            //findng encrypted character
            ch = findEncriptCharacter(alphabets, ch, key);
        }
        //Adding encripted characted into our encriptedString
        encriptedString = encriptedString + ch;
    }
    return encriptedString;
}
console.log(encriptMessage('rohan.', 4));
