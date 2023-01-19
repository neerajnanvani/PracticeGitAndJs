function leadersInArray(arr:number[]):number[]{
    let leaders:number[]=[]
    if(arr.length ===0){
        return [];
    }
    
    let max=arr[arr.length-1];
    leaders.push(max);
    for(let i=arr.length-2;i>=0;i--){
        if (arr[i]>max){
            max=arr[i];
            leaders.push(max);
        }
    }
    return leaders;
}

console.log(leadersInArray([16,17,4,3,5,2]));