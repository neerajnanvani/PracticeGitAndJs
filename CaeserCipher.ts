(() => {
  let confidentialInformation: string;
  confidentialInformation = "hello how are you ?";
  const rotation: number = 4;

  function cipherEncrypting(information: string, rotateBy: number): void {
    let unencryptedInformation: string[]; // store incoming unencrypted information
    let encryptedInformation: string[] = []; // store encrypted information
    unencryptedInformation = information.split(""); // converting string into string Array

    unencryptedInformation.forEach((char) => {
      let num: number = char.charCodeAt(0); // convert char to number at index 0
      // Logic for encryption
      if (num >= 97 && num <= 122) {
        num += rotateBy;
        num <= 122
          ? encryptedInformation.push(String.fromCharCode(num)) // convert number to char and pushing it.
          : encryptedInformation.push(String.fromCharCode(num - 26));
      } else encryptedInformation.push(String.fromCharCode(num));
    });

    // printing encrypted information
    console.log(encryptedInformation.join(""));
  }

  if (confidentialInformation)
    cipherEncrypting(confidentialInformation.toLocaleLowerCase(), rotation);
  else console.log("Missing Confidential Information");
})();