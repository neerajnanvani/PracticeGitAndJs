const caeserCipher = (text, key) => {
    key = JSON.parse(key);
    console.log('a'.charCodeAt(0))
    let ans = '';
    // looping string
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) < 97 || text.charCodeAt(i) > 122) continue;  // checking if character not a small case letter
        ans += String.fromCharCode((text.charCodeAt(i) - 97 + key) % 26 + 97);  // adding changed character in string
    }
    return ans;
}

console.log(caeserCipher(process.argv[2], process.argv[3]))