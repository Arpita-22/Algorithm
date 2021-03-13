// a less than brute force approach
function bubbleSort(arr){
    let temp = 0
    // looping from the end of array
    for(let i = arr.length - 1 ; i >= 0; i--){
    // no of iterations would decrease compared to i i.e decreased by one element
      for(let j = 0; j <= i - 1; j++){
        if(arr[j] > arr[j+1]){
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
          }
      }
    }
    return arr
  }

  //optimzed version if the array is sorted decreases the no of iterations
  //time complexity O(n)
  function bubbleSort(arr){
    let temp = 0
    let swap 
    // looping from the end of array
    for(let i = arr.length - 1 ; i >= 0; i--){
        swap = false
    // no of iterations would decrease compared to i i.e decreased by one element
      for(let j = 0; j <= i - 1; j++){
        if(arr[j] > arr[j+1]){
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
          swap = true
          }
      }
      if(swap === false) break
    }
    return arr
  }
