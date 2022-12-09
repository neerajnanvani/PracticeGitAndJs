let arr=[1,2,3,4,5,6]
        let k=4
        let n=5
        function check(arr,k,n){
            let str=''
            for(let i=0;i<=k;i+=3){
             str =arr[i]
             arr[i]=arr[i+2]
             arr[i+2]=str
             console.log(arr)
            }
         console.log(arr)
        }
         check(arr,k,n)

         let arrGreater =[16,17,4,3,5]
         function checkRightGreater(arr){
            let result=''
            for(let i=0;i<arr.length;i++){
                for(let j=i+1;j<=arr.length;j++){
                    if(arr[i]<arr[j]){

                        result+=arr[j] + ' '
                       console.log(result)
                    }
                }
            }
            return result
         }
         checkRightGreater(arrGreater)