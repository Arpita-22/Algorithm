//brute force
function sumZero(arr){
    for(let i = 0; i < arr.length;i++){
        for(let j = i + 1; i < arr.length; j++){
            if(arr[i]+ arr[j] === 0) return[arr[i], arr[j]]
        }
    }
}

//multiple pointers pattern
function sumZero(arr){
    let left = 0
    let right = arr.length - 1
    //while left is less than right since left has to stop before right
    // that is why left is not less than equal to right
    while(left < right){
        let sum = arr[left] + arr[right]
        //to return the pair of elemnts in an array put the elements in a square bracket
        if(sum === 0) return [arr[left], arr[right]]
        //if sum is greater than zero then move to left since it is too big
        else if (sum > 0)  right--
        //if sum is less than zero too small move to right
        else left++
    }
}