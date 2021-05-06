//gives the ascii value of a i.e 97
"a".charCodeAt(0);

//gives 1 since 96 is subtracted from the ascii value of a
// gives 1  which is the position of "a" in the alphabet
//charCodeAt(0) corresponds to the index of the string
"a".charCodeAt(0) - 96;

//gives 26 

"z".charCodeAt(0) - 96;


let total = 0;

total += "hello".charCodeAt(0) - 96; //8
total += "hello".charCodeAt(1) - 96; //13
total += "hello".charCodeAt(2) - 96; //25  
total += "hello".charCodeAt(3) - 96; //37
total += "hello".charCodeAt(4) - 96; //52

hash(str, length)
//total = 52
total % 11 //8

//basic hash function
//only hashes string
//not constant time -> linear in key length
//could be a little more random

function hash(key, arrLen){
    let total = 0;
    // for(let i = 0; i < key.length; i++){
    //     let char = key[i];
    // }
    for(let char of key){
      //map a to 1, b to 2, c to 3
      let value = char.charCodeAt(0) - 96;
      total = (total + value) % arrLen;
    }
    return total;
  }

  function hash(key, arrLen){
    //use array length as prime numbers to decrease collision
    let total = 0;
    let weirdPrime = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
      //map a to 1, b to 2, c to 3
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + value) % arrLen;
    }
    return total;
  }
      
  console.log(hash("pink", 10)) //0
  console.log(hash("orangered", 10)) //7
  console.log(hash("cyan", 10)) //3
