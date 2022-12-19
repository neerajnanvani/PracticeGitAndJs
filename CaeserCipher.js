let string = 'hello how are you'

// function  for caeserCipher and pass 
function caeserCipher(str) {
    var lowerCaseStr = str.toLowerCase()
    //split the letter and create as an array of alphabet
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = ' '

    for (var i = 0; i < lowerCaseStr.length; i++) {
        var currentLetter = lowerCaseStr[i]
        if (currentLetter === ' ') {
            newStr += currentLetter;
           continue
        }
        var currentIndex = alphabet.indexOf(currentLetter)
        var newIndex = currentIndex + 4;
        if (newIndex > 25) newIndex = newIndex - 26
        if (str[i] === str[i].toUpperCase()) {
            newStr += alphabet[newIndex].toUpperCase()
        }
        else newStr += alphabet[newIndex]
    }
    return newStr
}

console.log(caeserCipher(string))