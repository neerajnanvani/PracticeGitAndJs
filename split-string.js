const splitString = (s) => {
    let tmp = '';
    let ans = [];
    for (let i = 0; i < s.length; i++) {    // Iterating string
        if (s[i] == ',') {      // if encounter ','
            ans.push(tmp);      // push string in output array
            tmp = '';   // empty tmp string
            continue;
        }
        tmp += s[i];    // storing string till ',' in tmp
    }
    if (tmp) ans.push(tmp);
    return ans;
}

console.log(splitString(process.argv[2]))