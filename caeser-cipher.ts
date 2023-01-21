
function cipher(strInput: string, n: number): string {
    const encryptedValue = strInput.split("").map((char) => {
    // getting the character code of the current character..
    let charCode = char.charCodeAt(0);
    // if not an alphabet (a-z) return character unencrypted.
    if (charCode < 97 || charCode > 122) return char;

    // shift character code by 'n'.
    let shiftedIndex = charCode + n;
    // rotating back to the front alphabet if character code is greater than the last alphabet.
    // 122 is the code for last alphabet 'z'.
    if (shiftedIndex > 122) {
      shiftedIndex = shiftedIndex - 122 + 96;
    }
    // getting the alphabet from character code..
    return String.fromCharCode(shiftedIndex);
  }).join("");

  return encryptedValue;
}


// testing the output in the console.
console.log( cipher('hello how are you.', 4) ) // lipps lsa evi csy.

console.log(cipher('rohan', 4));  // vsler