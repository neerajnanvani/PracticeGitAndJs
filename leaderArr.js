"use strict";
//element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.
let array = [16, 17, 4, 3, 5];
//function of check greater than or equal to all the elements of its right side
const checkGreaterArr = (arr) => {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] < arr[j]) {
                result += arr[j] + ' ';
                console.log(result);
            }
        }
    }
    return result;
};
checkGreaterArr(array); //return leader of array
