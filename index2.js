
let a = [16, 17, 4, 3, 5, 2]; //input array
let m = []; // initialising a empty array.
for (let i = 0; i < a.length; i++) {
    let condition = true;
    for (let j = i + 1; j < a.length; j++) {
        if (a[j] >= a[i]) { // if a[j]>=a[i] for any a[j],that means that a[i] is not a leader.
            condition = false; //so make the condition false
            break;

        }

    }
    if (condition == true) m.push(a[i]);//push those a[i] in our empty array which satisfy our condition

}
console.log(m);