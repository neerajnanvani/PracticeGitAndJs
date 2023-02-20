const tableRow = document.getElementById('tableRow') ! as HTMLTableRowElement;

let inputString: string;
let outputArray: string[] = [];
let char: string = "";
inputString = "Rohan,16,Male,Mumbai";

// Using IFFE to execute splitAString
(function splitAString(inputString: string): string[] {
  for (let index = 0; index < inputString.length; ++index) {
    // if comma NOT found then concating char else, pushing it to output array and set char to ''
    inputString[index] !== "," ? (char += inputString[index]) : (outputArray.push(char), (char = ""));
  }
  // to push the last char string
  outputArray.push(char);
  return outputArray;
})(inputString)

// Printing out the output
console.log(outputArray)

// HTML code
if(outputArray){
    for(let index = 0; index < outputArray.length; ++index ){
        let cell = document.createElement('td')! as HTMLTableCellElement;
        let cellText = document.createTextNode(outputArray[index]);
        cell.appendChild(cellText);
        tableRow.appendChild(cell);
    }
} else console.log("Array NOT Splited");