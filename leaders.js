// Approach

// I am using stack such a way that 
// greater element will be at top
// so if stack is empty then 
// current element is greater among all right elements

// Time-Complexity: O(n);

// Space-Complexity: O(2n)

function findLeaders(arr) {
    let arrLength = arr.length;
    let leaders = [];
    let stack = [];

    // traversing from right 
    // because element should be greater
    // from all right elements
    for(let i = arrLength - 1; i >= 0; i--) {

        // if stack is not empty and current element is greater than 
        // top element of stack then pop element from stack
        // till condition is true 
        while(stack.length > 0 && arr[i] > stack[stack.length - 1]) {
            stack.pop();         
        }

        // is stack is empty then current element is leader
        if(stack.length == 0) {
            leaders.push(arr[i]);
        }

        //add current element into stack
        stack.push(arr[i]);
    }

    // arranging the leaders
    return leaders.reverse();
}

console.log(findLeaders([16, 17, 4, 3, 5, 2]));