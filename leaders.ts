// This function returns an array of leader elements in array..
function leadersInArray(arr: number[]) {
  // using filter to get an array of elements which passes test
  const leaders = arr.filter((el, index, arr) => {
    // to check element is leader or not.
    // calling a function defined below.
    // this returns true if element is leader
    // otherwise returns false.. 
    return isLeader(el, index, arr);
  });
  return leaders;
}


// this function takes the 'element', 'element Index' and 'array'
// and compares element with all elements on the right
// returns true if all elements on the right are small 
// otherwise false.
function isLeader(el: number, elIndex: number, arr: number[]) {
  for(let j=(elIndex+1); j<arr.length; j++) {
    if(el < arr[j]) return false;
  }
  return true;
}


// checking the result in console..
console.log(leadersInArray([16,17,4,3,5,2]));