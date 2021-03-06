//using frequency counter pattern
function Validanagram(str1, str2){
    if(str1.length !== str2.length) return false
    let obj1 = {}
    let obj2 = {}
    for(let char of str1){
      obj1[char] = ++obj1[char]|| 1
    }
  
    for(let char of str2){
      obj2[char] = ++obj2[char]|| 1
    }
    for(let key in obj1){
      if(!obj2[key]) return false
      if(obj1[key] !== obj2[key]) return false
    }
    return true
  }

  //using a one object and a one less loop
  //using Anagram pattern
  function Validanagram(str1, str2){
    //if two strings of different length means anagram can't exist
    if(str1.length !== str2.length) return false
    let objStr1 = {}
    for(let char of str1){
    //if letter exists increment it otherwise set to 1
      objStr1[char] = ++objStr1[char]|| 1
    }
  
    for(let char of str2){
    //check if the key exists in the object
    //if the value of an object key is zero then it means falsey
      if(!objStr1[char]) return false
      else{
          // decrementing the value of the key in the object if the key exists
          objStr1[char]--
      }
    }
    return true
  }
