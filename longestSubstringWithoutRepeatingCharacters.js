var lengthOfLongestSubstring = function(s) {
    let max = 0
    let mySet = new Set()
    let j = 0
     for(let i = 0; i < s.length; i++ ){
        while(mySet.has(s.charAt(i))){
            mySet.delete(s.charAt(j))
            j++
        }
        mySet.add(s.charAt(i))
        max = Math.max(max, mySet.size)
    }
    return max
};