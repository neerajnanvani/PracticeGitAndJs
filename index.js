const splitString = (str) => {
    const result = [];
    let word = '';

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === ",") {
            result.push(word);
            word = '';
        } else {
            word += str.charAt(i);
            if(str.length - 1 == i)
            result.push(word);
        }
    }
    return result;
}

console.log(splitString('Rohan,16,Male,Delhi'));