// ## Q1: Reverse array in groups.
//   Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

// Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray (irrespective of its size).

// Input & output:

// Input:
// N = 5, K = 3
// arr[] = {1,2,3,4,5}
// Output: 3 2 1 5 4
// Explanation: First group consists of elements
// 1, 2, 3. Second group consists of 4,5.

// get sub-arrays 
// make a function to reverse it 
// reverse each sub array 
// spread it into result array 
function reverseArr(arr){
    let result = []
for(let i=arr.length;i>0;i--){
result.push(arr.pop())
}
return result
}
function reverseSubArr(arr,n,k){
    let increment = k
    let result = []
    let startIndexForSubArr = 0
    for(let i=0;i<n/increment;i++){
    let subArr;
    
    if(k>=n){
     subArr = arr.slice(startIndexForSubArr)
     
     result.push(...reverseArr(subArr))
    }else {
    subArr = arr.slice(startIndexForSubArr,k)
    result.push(...reverseArr(subArr))
    }
    
    startIndexForSubArr = k
    k += increment
    
    }
    return result
    }