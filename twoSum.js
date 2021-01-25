//bruteforce solution
var twoSum = function(nums, target) {
    let sum = 0
    for(let i = 0; i < nums.length; i++){
       for(let j = i+1; j <= nums.length; j++){
         sum = nums[i] + nums[j]
          if (sum === target)return [i,j] 
       }
       
    }
};

//optimized solution
var twoSum = function(nums, target) {
    let hash = {}
    for(let i = 0; i < nums.length; i++){
      let neededValue = target - nums[i]
      if(!hash.hasOwnProperty(neededValue)){
        hash[nums[i]] = i
      } else {
        return[hash[neededValue],i]
      }
    }
  }