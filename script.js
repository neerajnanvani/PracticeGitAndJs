"use strict";
// array , in this find the reverse of array
let arr = [1, 2, 3, 4, 5, 6];
let index = 4;
//function of reverseArray
const reverseArr = (arr, index) => {
    let newArr;
    for (let i = 0; i <= index; i += 3) {
        newArr = arr[+i];
        arr[i] = arr[i + 2];
        arr[i + 2] = newArr;
        console.log(arr);
    }
    return arr;
};
reverseArr(arr, index); // return reverse sub array
