// bruteforce approach with more runtime
var missingNumber = function(nums) {
    let n = nums.length
    if(n === 0){
        return
    }
    for(let i = 0; i <= nums.length; i++){
        if(!nums.includes(i)){
            return i
        }
    }
};

//Optimzed approach 
var missingNumber = function(nums) {
    // n = nums.length+1
    let n = nums.length
    if(n === 0){
        return
    }
    //sum of n natural numbers
    let sumOfN = n*(n+1)/2
    let sumOfNums = 0
    
    for(let i = 0; i < n; i++){
        sumOfNums += nums[i]
    }
    
    let missingNo = sumOfN - sumOfNums
    return missingNo
    
};