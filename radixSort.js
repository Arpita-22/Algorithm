  //time complexity O(nk) n = no of integers k = length of an integer spce complexity O(n+k)
  
  // function getDigit(num, place){
  //    num = num.toString()
  //    n = num.length - 1
  //    let digit = parseInt(num[n - place])
  //   console.log(digit)
  //   }
//getting the digit
function getDigit(num, place){
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10
  }
//counting the no of digits
  function digitCount(num){
    //since Math.log10(0) is -infinity
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }
//counting the maximum digits in an array
  function mostDigits(nums){
    let maxDigit = 0
    for(let i = 0; i < nums.length; i++){
      maxDigit = Math.max(maxDigit, digitCount(nums[i]))
    }
    return maxDigit
  }

  function radixSort(nums){
    let n = mostDigits(nums)
    for(let k = 0; k < n; k++){
    let digitBuckets = Array.from({length:10},() => [])
    for(let i = 0; i < nums.length; i++){
      let digit = getDigit(nums[i],k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(... digitBuckets)
    }
    return nums
  }