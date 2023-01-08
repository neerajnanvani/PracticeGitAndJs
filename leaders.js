function leadersInArray(n, arr) {
  const leaders = arr.filter((el, index, arr) => {
    return isLeader(el, index, arr);
  });
  return leaders;
}

function isLeader(el, elIndex, arr) {
  for(let j=(elIndex+1); j<arr.length; j++) {
    if(el < arr[j]) return false;
  }
  return true;
}

console.log(leadersInArray(5, [16,17,4,3,5,2]));