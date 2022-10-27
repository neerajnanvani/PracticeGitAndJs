const caeserCipher = (text, key) => {
    key = JSON.parse(key);
    console.log('a'.charCodeAt(0))
    let ans = '';
    for (let i = 0; i < text.length; i++) {
        ans += String.fromCharCode((text.charCodeAt(i) - 97 + key) % 26 + 97);
        console.log((text.charCodeAt(i) + key) % 97 + 97)
    }
    return ans;
}

console.log(caeserCipher(process.argv[2], process.argv[3]))