let strInput = "Rohan,16,Male,Delhi";

function customSplit(str: string) {
  let splittedArray: string[] = [];
  let el = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ",") {
      splittedArray.push(el);
      el = "";
    } else if (i >= str.length - 1) {
      splittedArray.push((el += str[i]));
    } else {
      el += str[i];
    }
  }
  return splittedArray;
}

console.log(customSplit(strInput));
