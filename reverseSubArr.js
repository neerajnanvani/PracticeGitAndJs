function reverseSubArrOfSizeK(arr, k){
    const n = arr.length

    for(let i=0; i<n; i+=k){
        let start = i
        let end = Math.min(i+k-1, n-1)
        let temp;

        while (start < end){
            temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
    return arr
}

const arr = [1, 2, 3, 4, 5]

console.log(reverseSubArrOfSizeK(arr, 3))