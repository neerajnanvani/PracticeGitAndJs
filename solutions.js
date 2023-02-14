// Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.
// Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray (irrespective of its size).
// Input & output:
// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.

function reverseInKGroups(arr, length, groupSize) {
    if(groupSize <= 0 ) {
        console.log("please enter valid group  size");
        return;
    }
    if(length == 0) return [];
    if(groupSize == 1) return arr;
    let i = 0;
    let reverseArray = [];
    while(i < length) {
        let stack = [];
        while(stack.length < groupSize && i < length) {
            stack.push(arr[i++]);
        }

        while(stack.length > 0) {
            reverseArray.push(stack.pop());
        }
    }
    //console.log(reverseArray);
    return reverseArray;
}

console.log(reverseInKGroups([1, 2, 3, 4, 5],5, 3));


//Q.2: Leaders in an array 

// Given an array A of positive integers. 
// Your task is to find the leaders in the array. 
// An element of array is leader 
// if it is greater than or equal to all the elements to 
// its right side. The rightmost element is always a leader.

// Input & Output:

// Input: n = 6 A[] = {16,17,4,3,5,2} 
// Output: 17 5 2 
// Explanation: The first leader is 17 as it is greater 
// than all the elements to its right. Similarly, 
// the next leader is 5. The right most element is always
//  a leader so it is also included.


function findLeaders(arr) {
    let arrLength = arr.length;
    let leaders = [];
    let stack = [];
    for(let i = arrLength - 1; i >= 0; i--) {
        while(stack.length > 0 && arr[i] > stack[stack.length - 1]) {
            stack.pop();         
        }
        if(stack.length == 0) {
            leaders.push(arr[i]);
        }
        stack.push(arr[i]);
    }
    return leaders.reverse();
}

console.log(findLeaders([16, 17, 4, 3, 5, 2]));

