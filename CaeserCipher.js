(function () {
    var confidentialInformation;
    confidentialInformation = "hello how are you ?";
    var rotation = 4;
    function cipherEncrypting(information, rotateBy) {
        var unencryptedInformation; // store incoming unencrypted information
        var encryptedInformation = []; // store encrypted information
        unencryptedInformation = information.split(""); // converting string into string Array
        unencryptedInformation.forEach(function (char) {
            var num = char.charCodeAt(0); // convert char to number at index 0
            // Logic for encryption
            if (num >= 97 && num <= 122) {
                num += rotateBy;
                if (num <= 122)
                    encryptedInformation.push(String.fromCharCode(num)); // convert number to char and pushing it.
                else
                    encryptedInformation.push(String.fromCharCode(num - 26));
            }
            else
                encryptedInformation.push(String.fromCharCode(num));
        });
        // printing encrypted information
        console.log(encryptedInformation.join(""));
    }
    if (confidentialInformation)
        cipherEncrypting(confidentialInformation.toLocaleLowerCase(), rotation);
    else
        console.log("Missing Confidential Information");
})();
