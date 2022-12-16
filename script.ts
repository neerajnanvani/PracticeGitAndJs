// array , in this find the reverse of array
let arr:number[]=[1,2,3,4,5,6]
        let index:number=3
        
        //function of reverseArray
       const reverseArr= (arr:number[],index:number) => {
        for (let i = 0; i < arr.length; i += index) {
        let begin = i;
        let end = Math.min(i + index - 1, arr.length - 1);
        let temp;

        while (begin< end) {
            temp = arr[begin];
            arr[begin] = arr[end];
            arr[end] = temp;
            begin++;
            end--;
        }
    }
    return arr;
        }
        reverseArr(arr,index) // return reverse sub array
