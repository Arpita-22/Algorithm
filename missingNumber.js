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