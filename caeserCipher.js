
function caeserCipher(msg, key){
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    
    // create a object which is connecting alphabets with there index in alphabets array
    const alphaInd = {
        a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
    }
    
    // encrypted msg
    let encrypted = ""
    
    // this loop is running for every character in msg
    for (let i=0; i<msg.length; i++){
    
	// gives the index of the new character in which we will encrypt current character 
        let ind = alphaInd[msg[i]] + key
        
        //checks if current charcter is in alphaIndex object or not
        if(alphaInd[msg[i]] === undefined){
            encrypted = encrypted + msg[i]
        }
        
        //checks if the new character index is greater than 25 or not
        else if(ind > 25){
            let newInd = (alphaInd[msg[i]] + key - 25)- 1
            encrypted = encrypted + alphabets[newInd]
        }
        else {
            encrypted = encrypted + alphabets[ind]
        }
        
    }
    
   return encrypted
    
}