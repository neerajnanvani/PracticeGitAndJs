function splitByComma(str) {
    var arr = [];
    var strLength = str.length;
    var word = '';
    for (var i = 0; i < strLength; i++) {
        var ch = str.charAt(i);
        if (ch == ',') {
            arr.push(word);
            word = '';
            continue;
        }
        word = word + ch;
    }
    arr.push(word);
    return arr;
}
var record = splitByComma("Rohan,16,Male,Delhi");
// <table>
//         <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Location</th>
//         </tr>
//         <tr>
//             <td>Rohan</td>
//             <td>16</td>
//             <td>Male</td>
//             <td>Delhi</td>
//         </tr>
//     </table>
var tableElement = document.querySelector("table");
console.log(tableElement);
var trElement = document.createElement('tr');
record.forEach(function (cell) {
    trElement.innerHTML += "<td>".concat(cell, "</td>");
});
tableElement === null || tableElement === void 0 ? void 0 : tableElement.appendChild(trElement);
