//Using frequency Counter pattern
function areThereDuplicates() {
    let obj = {}
    let n = arguments.length
    for(let i = 0; i < n; i++){
       obj[arguments[i]] = ++obj[arguments[i]] || 1
  
      if(obj[arguments[i]] > 1){
      return true
      }
    }
    return false
  }


// Using set
  function areThereDuplicates() {
    let set = new Set(arguments)
    if(set.size !== arguments.length) return true
    return false
  }