function reverseArray(arr, k) {
    for (let i = 0; i < arr.length; i += k) {
        let start = i;
        let end = Math.min(i + k - 1, arr.length - 1);
        let temp;

        while (start < end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5], 3));