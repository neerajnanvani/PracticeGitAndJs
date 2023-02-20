function splitByComma(str) {
    var arr = [];
    var strLength = str.length;
    var word = '';
    for (var i = 0; i < strLength; i++) {
        var ch = str.charAt(i);
        //if we get ',' it means we have to split
        //so we get a word and push that word into arr
        if (ch == ',') {
            arr.push(word);
            // now we have to generate a new word
            word = '';
            continue;
        }
        // creating word by adding character one by one
        word = word + ch;
    }
    // last word is not added 
    // so handle this seprately 
    arr.push(word);
    return arr;
}
// geting all word inside array
var record = splitByComma("Rohan,16,Male,Delhi");
// extracting table element from index.html
var tableElement = document.querySelector("table");
var trElement = document.createElement('tr');
// creating all table data
record.forEach(function (cell) {
    trElement.innerHTML += "<td>".concat(cell, "</td>");
});
// appending table row into table
tableElement === null || tableElement === void 0 ? void 0 : tableElement.appendChild(trElement);
