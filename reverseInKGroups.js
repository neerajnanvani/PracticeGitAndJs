// Algorithm

//step1 --> handleing edge cases like
//groupsize <= 0 or length== 0 or groupSize == 1

//step2 --> creating a empty stack and push element till
//          stack size not equal to groupSize

//step3 --> pop element from stack and add into reverseArray 
//          till stack do not become empty.
// as we know stack works as LIFO then it will revrse the array 

//step-4 --> repeat step2 and step3 till all elment is not traversed. 

// Time Complexity -> O(2n) 
// Reason: Every Element is visited two times

// Space Complexity -> O(n)+O(K)
// Reason: O(n) for storing answer into a new array
// O(K) for stack


function reverseInKGroups(arr, length, groupSize) {

    //if groupSize is 0 or less than 0 then inform to the user
    //for giving correct value and return
    if(groupSize <= 0 ) {
        console.log("please enter valid group  size");
        return;
    }

    //if groupSize is 1 then no need to do anything
    //just return original array
    if(groupSize == 1) return arr;


    let i = 0;
    let reverseArray = [];

    //traverse till all element is not visited
    while(i < length) {
        let stack = [];

        //remove element from array and push into stack
        //till stack size is not equal to groupsize 
        // or all element is not visited
        while(stack.length < groupSize && i < length) {
            stack.push(arr[i++]);
        }
        
        //pop element from stack till stack 
        //do not become empty and push into 
        //reverseArray so that we will get element 
        //in reverse order
        while(stack.length > 0) {
            reverseArray.push(stack.pop());
        }
    }
    
    return reverseArray;
}

console.log(reverseInKGroups([1, 2, 3, 4, 5],5, 3));