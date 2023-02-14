const SIZE_OF_ARRAY = +process.argv[2];
const SUB_ARRAY = +process.argv[3];
const STRING_ARRAY = process.argv[4].trim().split(',')
const NUMBER_ARRAY = STRING_ARRAY.map((ele) => { return +ele })

if (!SIZE_OF_ARRAY || !SUB_ARRAY || !NUMBER_ARRAY) {
   console.log('Please provide run time argument in below form : -')
   console.log('node reverse.js SIZE_OF_ARRAY SUB_ARRAY ARRAY')
   console.log('e.g. : node reverse.js 5 3 [1,2,3,4,5]')
} else if (SIZE_OF_ARRAY != NUMBER_ARRAY.length) {
   console.log('SIZE_OF_ARRAY not equal to length of ARRAY')
}
else {
   let tempArray = [];
   let finalResult = [];
   for (let i = 0; i <= NUMBER_ARRAY.length; i = i + SUB_ARRAY) {
      tempArray.push(NUMBER_ARRAY.slice(i, i + SUB_ARRAY).reverse());
   }
   // console.log(tempArray.flat()); // flat not working in node.js 
   // 1 depth flat 
   tempArray.forEach(ele => {
      ele.forEach((ele) => {
         finalResult.push(ele)
      })
   });
   console.log(finalResult)
}