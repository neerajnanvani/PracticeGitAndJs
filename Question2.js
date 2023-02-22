// ## Q2: Leaders in an array
//   Given an array A of positive integers. Your task is to find the leaders in the array. 
// An element of array is leader if it is greater than or equal to all the elements to 
// its right side. The rightmost element is always a leader. 
 
//  Input & Output:
 
// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17 
// as it is greater than all the elements
// to its right.  Similarly, the next 
// leader is 5. The right most element 
// is always a leader so it is also 
// included.
let n = 6 ;
let A = [16,17,4,3,5,2];

for(let i=0 ; i<n ; i++){   //itterating array element from array A upto length n
    let count =0 ;          //taken a temp count var and initialize it 0
    for(let j=i+1 ; j<n ; j++ ){// used for loop for  comparing i and j value from the where j is 1 greater than 1
        if(A[i] < A[j]){        // if any value after A[i]  greater than then increase the count by 1
            count++;
        }
    }
    if(count ==0){              // if the count is zero means no value is greater than in the right then print the value
        console.log(A[i]);
    }
}