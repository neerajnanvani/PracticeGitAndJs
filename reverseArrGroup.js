function reverseSubArrays(n, k, arr) {
  for(let i=0; i<=n; i+=k) {
    // g = no. of elements in a current group
    let g = k;
    if(i+k > n) g = n - i;

    // to reverse group
    for(let j=0; j<Math.floor(g/2); j++) {
      [arr[i+j], arr[i+(g-1)-j]] = [arr[i+(g-1)-j], arr[i+j]];
    }
  }
  return arr;
}

console.log(reverseSubArrays(5, 3, [1,2,3,4,5]));