//bruteforce
function countUniqueValues(arr){
    let count = {}
    arr.forEach(element => {
      count[element] = ++count[element] || 1
    })
    return Object.keys(count).length
 }

//Using count unique values
//loop until the right reaches the length of the array
//if arr[left] === arr[right] move the right pointer
//if arr[left] not equal right element move left pointer
//then replace the element with the element at right pointer with the element at the left pointer
//count the value of left+ 1 since left starts from index 0

function countUniqueValues(arr){
    let i = 0
    let j = i + 1
    while(j < arr.length){
        if(arr[i] === arr[j]) j++
        else {
            i++
            arr[i] = arr[j]
        }
    }
    return (i+1)
 }

 //Using count Unique Values pattern

function countUniqueValues(arr){
    //if no element is present
    if(arr.length === 0) return 0
    let i = 0
    for(let j = 1; j < arr.length;j++){
        if(arr[i] !== arr[j]){
           i++;
          arr[i] = arr[j]
        }
    }
   return (i + 1)
 }
