//O(n2) space O(1) almost sorted array O(n)
function insertionSort(arr){
    //starting from the second element of the array
    for(let i = 1; i < arr.length;i++){
        let currentVal = arr[i]
        //starting from the elment before i to  backwards till arr length is 1
        for(var j = i-1 ; j >= 0 && arr[j] > currentVal; j--){
                arr[j + 1] = arr[j]
                console.log(arr)
        }
        arr[j + 1] = currentVal
    }
    return arr
}
