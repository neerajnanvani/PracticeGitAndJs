function caeserCipher(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, code);

    function code(correspondance) {
        const charCode = correspondance.charCodeAt();
        return String.fromCharCode(
            ((charCode + 4) <= 90) ? charCode + 4 : (charCode + 4) % 90 + 64
        );
    }
}

console.log(caeserCipher("hello how are you"));