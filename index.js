// Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

// Input & Output:

// Input: n = 6 A[] = {16,17,4,3,5,2} Output: 17 5 2 Explanation: The first leader is 17 as it is greater than all the elements to its right. Similarly, the next leader is 5. The right most element is always a leader so it is also included.




let arr =[1,2,3,4,5];
let n = arr.length ;
let k = 3;

    for(let i = 0; i < n; i += k)
    {
        let l = i;
 
        
        let r = Math.min(i + k - 1, n - 1);
        let temp;
         
         while (l < r)
        {
            temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l += 1;
            r -= 1;
        }
    }
console.log(arr);
// ======================================================

 
  
 

