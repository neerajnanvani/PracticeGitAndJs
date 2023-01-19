function reverseSubArray(arr:number[],k:number):void{
    let n=arr.length
    for(let i=0;i<k;i=i+k){
        let start=i;
        let end=Math.min(i+k-1,n-1);
        let temp:number;

        while(start<end){
            temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
            start++;
            end--;
        }
    }
}

const arr=[1,4,7,3,5,3];

reverseSubArray(arr,3);

console.log(arr);
