const findLeaders = (arr) => {
    const ans = [];
    let max = arr[arr.length - 1];
    ans.push(max);
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= max) {
            ans.push(arr[i]);
            max = arr[i];
        }
    }
    return ans;
}