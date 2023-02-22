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
let N =5;
let K =3 ;
let arr = [1,2,3,4,5];
let arr1 = [];

for(let i =0 ;  i<N ; i=i+K){ //Itterating the arr array of length N and i will increase by K 
    let temp =[];               // Taken a temporary empty array and after increase of K in i this will get empty
        for(let j=i ; j<i+K ; j++){ //using this for loop for itterating from i to K and reversing it 
            temp.push(arr[j]);
        }
    temp = temp.reverse();  //using reverse method to reverse the temporary array
    arr1 = arr1.concat(temp);   //adding the reversed array into the arr1 array
}

for(let i = 0 ; i < arr1.length ; i++){ // This loop is for printing the modified array
    if(arr1[i] != undefined){
        console.log(arr1[i]);           //If the value if not undefined then only print the value from the arr1
    }
}