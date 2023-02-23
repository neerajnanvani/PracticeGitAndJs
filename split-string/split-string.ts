function splitByComma(str: string): string[] {
    let arr: string[] = [];
    let strLength = str.length;
    let word = '';
    for (let i = 0; i < strLength; i++) {
        let ch = str.charAt(i);

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
const record = splitByComma("Rohan,16,Male,Delhi");

// extracting table element from index.html
let tableElement = document.querySelector("table");
let trElement = document.createElement('tr');
// creating all table data
record.forEach((cell) => {
    trElement.innerHTML += `<td>${cell}</td>`;
})

// appending table row into table
tableElement?.appendChild(trElement);