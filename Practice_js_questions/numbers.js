valueAtBit = function(num, bit) {
    //decimal to binary
     let bin =  num.toString(2)
    //binary to decimal
     let num1 = parseInt(bin, 2)

    //decimal to binary conversion
    let rem = 0;
    let bin = 0;
    let i = 1
    let result = 0;
    while(num !== 0){
      rem = num % 2;
      bin = bin + rem * i;
      num = parseInt(num / 2);
      i = i * 10
    
    }
    bin = bin.toString()
    //binary to decimal
    for(let i = 0; i < bin.length; i++){
      let expo = bin.length - 1 - i;
      console.log(expo)
      result += bin[i] *(2 ** expo);
    }
    
    return result
    }

//Test 1: Find the value of a given bit
valueAtBit = function(num, bit) {
    let bin = num.toString(2);
    let binStr = bin.toString();
    if(bit > binStr.length){
      return 0;
    }
    else{
      return parseInt(binStr[binStr.length - bit]);
    }
    }

//Test 2: Return the base10 representation of a binary string
base10 = function(str) {
    let num = 0;
    for(let i = 0; i < str.length; i++){
      let pow = str.length - 1 - i;
      num += parseInt(str[i])*(2 ** pow);
    }
    return num;
  }

//Test 3: Convert an eight-bit number to a binary string
convertToBinary = function(num) {
    return ("00000000"+num.toString(2)).substr(-8)
  }

//Test 4: Multiply with precision
multiply = function(a, b) {
    let numStr = b.toString();
    let index = numStr.indexOf(".");
    let decimalPlaces = numStr.length - 1 - index;
    return parseFloat((a * b).toFixed(decimalPlaces));
    }