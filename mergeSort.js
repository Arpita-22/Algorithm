// merging called on two sorted arrays
//Time complexity O(nlogn) space complexity O(n)
function merge(arr1, arr2){
    let results = []
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
      if(arr2[j] <= arr1[i]){
        results.push(arr2[j])
        j++
      }
      else {
        results.push(arr1[i])
        i++
      }
    }
    //if there is still elements left in arr1
    while(i < arr1.length){
      results.push(arr1[i])
      i++
    }
    //if there is still elements left in arr2
    while(j < arr2.length){
      results.push(arr2[j])
      j++
    }
    return results
}

//used recursion to break the array and then merge them together
function mergeSort(arr){
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}
