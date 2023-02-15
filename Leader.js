const SIZE_OF_ARRAY = +process.argv[2];
const STRING_ARRAY = process.argv[3].trim().split(',')
const NUMBER_ARRAY = STRING_ARRAY.map(ele => +ele)
const TEMP_ARRAY = [...NUMBER_ARRAY];

let leaderList = [];

function isLeader(number, arr) {
   // filtering out those RHS number that are greater than current number  
   // than returning filtered array length
   return arr.filter(numInArr => numInArr > number).length
}

NUMBER_ARRAY.forEach((ele) => {
   // poping out 0th index element every time, since we have to check only RHS number 
   TEMP_ARRAY.shift()
   // if filtered array length is === 0 i.e false, than pushing it to leaderList array 
   if (!isLeader(ele, TEMP_ARRAY)) leaderList.push(ele)
});
console.log(leaderList)