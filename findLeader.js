const ans = [];
const findLeaders = () => {
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) flag = false;
            break;
        }
        if (flag) ans.push(arr[i])
    }
}
const arr = [1, 3, 5, 7];
findLeaders()