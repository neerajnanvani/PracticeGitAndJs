const findLeaders = (arr) => {
    arr = JSON.parse(arr);
    console.log(arr.length)
    const ans = [];
    let max = arr[arr.length - 1];
    ans.push(max);  // pushing right most because it wil always be aleader
    for (let i = arr.length - 2; i >= 0; i--) { // Iterating over array from right to left
        if (arr[i] >= max) {    // if value more than max it means it is leader
            ans.push(arr[i]);
            max = arr[i];
        }
    }
    return ans;
}

console.log(findLeaders(process.argv[2]))