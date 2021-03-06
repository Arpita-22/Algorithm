//bruteforce O(n2)
function maxSubArraySum(arr,num){
    if(num > arr.length) return null
    //if the array contains all negative numbers 
    let maxSum = -Infinity
    for(let i = 0; i < arr.length - num +1; i++){
      let currentSum = 0
      for(let j = 0; j < num; j++){
        // taking the sum of three consecutive elements in an array
        currentSum += arr[i+j]
      }
      if(maxSum < currentSum){
        maxSum = currentSum
      }
    }
    return maxSum
    }

//sliding window pattern O(n)
function maxSubArraySum(arr,num){
    if(num > arr.length) return null
    //if the array contains all negative numbers 
    let maxSum = 0
    let currentSum = 0
    for(let i = 0; i < num; i++){
      maxSum += arr[i]
    }
    currentSum = maxSum
    for(let i = num; i < arr.length; i++){
        currentSum = currentSum - arr[i - num]+ arr[i]
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
    }