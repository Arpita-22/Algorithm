
//bruteforce approach
function repeatedString(s, n) {
    // Write your code here
    let count = 0;
    let str = "";
    while(str.length <= 10){
      str = str + s;
    }
    for(let i = 0; i < 10; i++){
      if(str[i] === "a"){
        count++;
      }
    } 
    return count;   
}

//optimized approach
/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    if(s.length === 0 || n === 0)  return 0;
    let count = 0;
    let quotient = BigInt(BigInt(n) / BigInt(s.length));
    let remainder = BigInt(BigInt(n) % BigInt(s.length));

    let frequency =  quotient * countLetter(s, s.length) + remainder * countLetter(s, remainder)
    console.log(frequency)
    return BigInt(frequency);
}

function countLetter(s, length){
  let count = BigInt(0);
  if(length === 0)  return 0;
  else{
    for(let i = 0 ; i < length; i++){
      if(s[i] === "a") count++;
    }
    return count; 
  }
}
