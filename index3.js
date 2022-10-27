// ulius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y, and z would map to z, a, b and c.

// **Original alphabet:**		abcdefghijklmnopqrstuvwxyz
// **Alphabet rotated +3:**		defghijklmnopqrstuvwxyzabc

function cipher(str,n){

    let albhabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    console.log(albhabet.indexOf("c"));
    let newa =[];
    let inp = str.split("");
     for(let i=0;i<inp.length;i++){
       let p = albhabet.indexOf(str[i]);
      let  l = p + n;
         if(l>25){
            l = l-26;
         }
        newa.push(albhabet[l]);
     }
console.log(newa.join(""))
}
cipher("rohan",4);