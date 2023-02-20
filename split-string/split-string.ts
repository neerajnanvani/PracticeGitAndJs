function splitByComma(str) {
    let arr: string[] = [];
    let strLength = str.length;
    let word = '';
    for (let i = 0; i < strLength; i++) {
        let ch = str.charAt(i);
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

const record = splitByComma("Rohan,16,Male,Delhi");


let tableElement = document.querySelector("table");
console.log(tableElement);
let trElement = document.createElement('tr');
record.forEach((cell) => {
    trElement.innerHTML += `<td>${cell}</td>`;
})
tableElement?.appendChild(trElement);