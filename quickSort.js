function pivot(arr, start = 0, end = arr.length - 1){
    function swap(arr,i,j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp 
    }
    //Taking the first element as pivot
    let pivot = arr[start]
    let swapIndex = start
    for(let i = start+ 1 ; i < arr.length;i++){
      if(pivot > arr[i]){
        swapIndex++
        swap(arr,swapIndex,i)
      }
    }
    //swapping pivot from start to the swap index
   swap(arr,start, swapIndex)
   return swapIndex
}

function quickSort(arr,left = 0, right = arr.length-1){
  if(left < right){
    //returns the pivot/swap index
  let pivotIndex = pivot(arr, left, right)
  //quicksort left
  quickSort(arr, left, pivotIndex - 1)
  //quicksort right
   quickSort(arr, pivotIndex + 1, right)
  }  
  return arr
}