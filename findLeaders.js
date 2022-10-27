function Leaders( arr)
{   let size = arr.length
    for (let i = 0; i < size; i++)
    {
        let j;
        for (j = i+1; j < size; j++)
        {
            if (arr[i] <=arr[j])
                break;
        }   
        if (j == size) // the loop didn't break
            document.write(arr[i] + " ");
  }
}