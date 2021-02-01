//bruteforce approach with regex(less runtime)
var reverseWords = function(s) {
    var newStr = s.replace(/(^\s+|\s+$)/g,'')
    arr = newStr.split(' ').reverse()
    let str = ''
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == ''){
        continue
      }
      str = str + arr[i] + ' '
    }
    return str.trim()
  };

// bruteforce approach without regex(less memory usage)
  var reverseWords = function(s) {
    arr = s.split(' ').reverse()
    let str = ''
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == ''){
        continue
      }
      str = str + arr[i] + ' '
    }
    return str.trim()
  };