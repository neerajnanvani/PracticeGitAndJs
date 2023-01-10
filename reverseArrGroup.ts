function reverseSubArrays(n: number, k: number, arr: number[]) {
  // runs the loop no. of group times.
  for(let i=0; i<=n; i+=k) {
    // g = no. of elements in a current group
    let g = k;
    // this checks the last group for less no. of elements
    // if last group elements is less than 'k' than sets the 
    // var 'g' (no. of elements) to this group.
    if(i+k > n) g = n - i;

    // to reverse current group
    // runs the loop half times the length of the group
    for(let j=0; j<Math.floor(g/2); j++) {
      // swap elements with 'destructural assignment'
      // first element with last element
      // second with second last element
      // and so on..
      [arr[i+j], arr[i+(g-1)-j]] = [arr[i+(g-1)-j], arr[i+j]];
    }
  }
  return arr;
}

// checking the result in console
console.log(reverseSubArrays(5, 3, [1,2,3,4,5]));