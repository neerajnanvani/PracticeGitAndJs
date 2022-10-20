
let a = [16,17,4,3,5,2];

let b = 0;
let m =[];
 for(let i = 0; i< a.length;i++){
    let condition = true;
    for(let j = i+1;j<a.length;j++){
        if(a[j]>=a[i]){
            condition = false;
            break;
        //    b.push(a[i]);
        //    console.log(a[j]);

         }
          
     }
if (condition == true) m.push(a[i]);

 

}
console.log(m);