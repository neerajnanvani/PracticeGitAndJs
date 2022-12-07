const arrayLeaders = (arr) => {
    let result = '';

    for(let i = 0; i < arr.length; i++) {

        let j;
        for(j = i + 1; j < arr.length; j++) {    
            if(arr[i] <= arr[j]) {
                break;
            }
        }
        
        if(j == arr.length){
            result += arr[i] + ' ';
        }

    }
    
    return result;
}

console.log(arrayLeaders([16,17,4,3,5,2]));