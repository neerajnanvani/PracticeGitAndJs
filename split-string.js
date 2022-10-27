const splitString = (s) => {
    let tmp = '';
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ',') {
            ans.push(tmp);
            tmp = '';
            continue;
        }
        tmp += s[i];
    }
    if (tmp) ans.push(tmp);
    return ans;
}

console.log(splitString(process.argv[2]))