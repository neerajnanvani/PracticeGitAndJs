let arr = [16, 17, 4, 3, 5, 2]

for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            count++
        }
    }
    if (count == 0) {
        console.log(arr[i]);
    }
}