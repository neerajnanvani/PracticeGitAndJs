const splitString = (str) => {
    const result = [];
    let word = '';

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === ",") {
            result.push(word);
            word = '';
        } else {
            word += str.charAt(i);
        }
    }
    return result;
}

console.log(splitString('Rohan,16,Male,Delhi'));