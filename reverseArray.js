const reverseArray = (arr, k) => {
    for (let i = 0; i < Math.ceil(arr.length / k); i++) {
        let l = i * k;
        let r = l + k - 1;
        if (r >= arr.length) r = arr.length - 1;
        console.log(l, r)
        while (l < r) {
            arr[l] = arr[l] + arr[r];
            arr[r] = arr[l] - arr[r];
            arr[l] = arr[l] - arr[r];
            l++;
            r--;
        }
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArray(arr, 4)
console.log(arr);