function splitByComma(str){
    const arr = []
    let newStr = ""
    const len = str.length

    // run for length of str times
    for(let i=0; i<len; i++){
        if(i === len-1){
            newStr = newStr + str[i]
            arr.push(newStr)
        }
        else if(str[i] === ','){
            arr.push(newStr)
            newStr = ''
        }
        else {
            newStr = newStr + str[i]
        }
    }
   return arr 
}

function createTable(str){

    const arr = splitByComma(str)
    document.body.innerHTML = `
        <table>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Sex</th>
                <th>State</th>
            </tr>
            <tr>
                <td>${arr[0]}</td>
                <td>${arr[1]}</td>
                <td>${arr[2]}</td>
                <td>${arr[3]}</td>
            </tr>
        </table>
    `
    
}

// createTable(splitByComma("Rohan,16,Male,Delhi"))
