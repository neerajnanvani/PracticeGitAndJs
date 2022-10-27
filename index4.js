// A CSV file is like an excel sheet but in reality, is simply a text file where each row of text represents a record and every row is segregated with commas (,) each field in the row is a property of the record,

// Write a function that takes a string as input and splits it into an array using commas. 
function split(str){
let arr = [];
let splits = '';
for(let i =0;i<=str.length;i++){
if(str[i] == ',' || i == str.length){
arr.push(splits);
splits = '';
}else{
splits = splits + str[i]
}
}
console.log(arr);
}
split("ravi,is,alitt,d")