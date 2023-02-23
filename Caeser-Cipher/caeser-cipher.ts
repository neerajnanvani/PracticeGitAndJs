//following function will take alphabets, string and key as parameter 
//It will return encripted character based on input character and key

function findEncriptCharacter(alphabets: string, ch: string, key: number): string {
    //getting index of input character from alphabets
    let orgIndex = alphabets.indexOf(ch);
    //Calculating index of encripted character
    let rotatedIndex = (orgIndex + key) % 26;
    //getting encripted character and return
    return alphabets.charAt(rotatedIndex);
}


function encriptMessage(message: string, key: number): string {
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    
    //Creating a string for storing answer
    let encriptedString = "";

    //Assuming that letters in string always be in lower case
    //Still for safety, converting string in lower case
    message = message.toLowerCase();
    let messageLength = message.length;
    for(let i = 0; i < messageLength; i++) {
        let ch = message.charAt(i);
        // As it is geven in questin
        //Cipher only encrypts letters
        // So filtering letters
        if(ch >= 'a' && ch <= 'z') {
            //findng encrypted character
            ch = findEncriptCharacter(alphabets, ch, key);
        }
        
        //Adding encripted characted into our encriptedString
        encriptedString = encriptedString + ch;
    }
    
    return encriptedString;
}

console.log(encriptMessage('rohan.', 4));



//Time Complexity: O(n)
//Space Complexity: O(1)
export {};


