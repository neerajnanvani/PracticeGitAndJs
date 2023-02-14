const SIZE_OF_ARRAY = +process.argv[2];
const STRING_ARRAY = process.argv[3].trim().split(',')
const NUMBER_ARRAY = STRING_ARRAY.map((ele) => { return +ele })
const TEMP_ARRAY = [...NUMBER_ARRAY]; 

let leaderList = [];

function isLeader(number, arr) {
   let greaterThanEle = arr.filter((numInArr) => {
      return numInArr > number
   })
   if (greaterThanEle.length > 0) return false
   else return true
}

NUMBER_ARRAY.forEach((ele) => {
   TEMP_ARRAY.shift()
   let leader = isLeader(ele, TEMP_ARRAY)
   if (leader) leaderList.push(ele)
});