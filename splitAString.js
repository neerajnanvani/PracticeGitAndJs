var tableRow = document.getElementById('tableRow');
var inputString;
var outputArray = [];
var char = "";
inputString = "Rohan,16,Male,Mumbai";
// Using IFFE to execute splitAString
(function splitAString(inputString) {
    for (var index = 0; index < inputString.length; ++index) {
        // if comma NOT found then concating char else, pushing it to output array and set char to ''
        inputString[index] !== "," ? (char += inputString[index]) : (outputArray.push(char), (char = ""));
    }
    // to push the last char string
    outputArray.push(char);
    return outputArray;
})(inputString);
// Printing out the output
console.log(outputArray);
// HTML code
if (outputArray) {
    for (var index = 0; index < outputArray.length; ++index) {
        var cell = document.createElement('td');
        var cellText = document.createTextNode(outputArray[index]);
        cell.appendChild(cellText);
        tableRow.appendChild(cell);
    }
}
else
    console.log("Array NOT Splited");
