let str = "Rohan,16,Male,Delhi ";

function split(str){
    let temp = "";
    let splitArray = [];
    for(let i=0; i<str.length; i++){
        if(str[i] != ','){
            temp+= str[i];
            console.log(temp)
            if(str[i+1] == ',' || i ==str.length-1){
                splitArray.push(temp);
                temp = "";
            }
        }
    }
    return splitArray;
}
console.log(split(str))