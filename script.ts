// array , in this find the reverse of array
let arr:number[]=[1,2,3,4,5,6]
        let index:number=4
        
        //function of reverseArray
        const reverseArr= (arr:( number)[],index:number) => {
            let newArr:number
            for(let i=0;i<=index;i+=3){
            newArr =arr[+i]
             arr[i]=arr[i+2]
             arr[i+2]=newArr
             console.log(arr)
            }
         return arr
        }
        reverseArr(arr,index) // return reverse sub array