const reverseArray = (arr, k) => {
    arr = JSON.parse(arr);
    k = JSON.parse(k)
    for (let i = 0; i < Math.ceil(arr.length / k); i++) {   // iterating by length of array divide by k i.e number of subsets
        let l = i * k;  // indicates starting of current sub array
        let r = l + k - 1;  // indicates end of current sub array
        if (r >= arr.length) r = arr.length - 1;    // check if last sub array size is less than k
        while (l < r) {     // exchanging value of items from left and right side of sub array
            arr[l] = arr[l] + arr[r];
            arr[r] = arr[l] - arr[r];
            arr[l] = arr[l] - arr[r];
            l++;
            r--;
        }
    }
    return arr;
}

console.log(reverseArray(process.argv[2], process.argv[3]))