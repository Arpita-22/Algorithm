function charCount(str){
    let output = {}
    for(let char of str){
      char = char.toLowerCase()
      // if (/[a-z0-9]/.test(char)){
        if(alphaNumeric(char)){
        output[char] = ++output[char] || 1
      }
    }
    return output
  }
  
  console.log(charCount("Hello 123"))
  
  function alphaNumeric(char){ 
      let code = char.charCodeAt(0)
      if(!(code > 96 && code < 123) 
      && !(code > 47 && code < 58)
      && !(code > 64 && code < 91)){
         return false
      }
    return true
  }