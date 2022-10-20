
let a = [16,17,4,3,5,2];

let b = 0;
let m =[];
 for(let i = 0; i< a.length;i++){
    for(let j = i+1;j<a.length;j++){
        if(a[i]>=a[j]){
            b = a[i];
            m.push(b);
        //    b.push(a[i]);
        //    console.log(a[j]);

         }
          
     }
 

}
console.log(m);