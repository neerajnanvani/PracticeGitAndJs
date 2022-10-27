const caeserCipher = (text, key) => {
    key = JSON.parse(key);
    let ans = '';
    // looping string
    for (let i = 0; i < text.length; i++) {
        console.log('Z'.charCodeAt(0))
        if (text.charCodeAt(i) < 91 || text.charCodeAt(i) > 64)
            ans += String.fromCharCode((text.charCodeAt(i) - 65 + key) % 26 + 65);  // manipulating capital letters
        if (text.charCodeAt(i) < 97 || text.charCodeAt(i) > 122) continue;  // checking if character not a small case letter
        ans += String.fromCharCode((text.charCodeAt(i) - 97 + key) % 26 + 97);  // manipulating small letters
    }
    return ans;
}

console.log(caeserCipher(process.argv[2], process.argv[3]))