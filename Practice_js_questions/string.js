//Test 1: Reduce duplicate characters to a desired minimum
reduceString = function(str, amount) {
    let newStr = "";
    let count = 1;
    for(let i = 0; i < str.length; i++){
      if(str[i] === str[i+1]){
        count++;
        if(count <= amount){
          newStr += str[i];
      }
      }
      else{
        count = 1
        newStr += str[i];
      }
    }
    return newStr;
  }

//Test 2: Wrap lines at a given number of columns, without breaking words
wordWrap = function(str, cols) {
    let strArr = str.split(' ');
    let newStr = strArr[0] ;
  
    for(let i = 1; i < strArr.length; i++){
  
      if(strArr[i].length >= cols){
        newStr += '\n'+ strArr[i];
      }
      else{
        if(newStr.length + strArr[i].length > cols)
          newStr += '\n'+ strArr[i];
        else{
          newStr += ' '+ strArr[i];
        }
      }
    }
    return newStr;
  }

//Test 3: Reverse a string
reverseString = function(str) {
    let rev = "";
    for(let i = str.length - 1; i >= 0; i--){
        rev += str[i];
    }
    return rev;
}

