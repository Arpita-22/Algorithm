//time complexity O(n^2)
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
      let lowestIndex = i
      // starting the comparison from the element next to i
      for(let j = i + 1;j < arr.length; j++)
      if(arr[j] < arr[lowestIndex]){
        lowestIndex = j
      }
      if(i !== lowestIndex){
        let temp = arr[i]
        arr[i] = arr[lowestIndex]
        arr[lowestIndex] = temp
      }   
    }
    return arr
  }
