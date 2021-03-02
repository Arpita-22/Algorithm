wordlist = ["APPLE", "PLEAS", "PLEASE"]
keypads = ["AXEFIOR","APELHXI", "ALOPEXS", "SPLAEJY", "XAPLESD"]
output =[0,1,3,2,0]


function wordMatch(word, key){
  let asciiArr = []
  for (let k = 0; k < 256; k++) {
    asciiArr[k] = 0;
  }
  for(let i = 0; i < key.length; i++){
    asciiArr[key.charCodeAt(i)] = 1
  }
  for(let i = 0; i < word.length; i++){
    if(asciiArr[word.charCodeAt(i)] !== 1) {
      return false;
    }
  }
  return true;
}

function wordCount(wordlist, keypads) {
  let count = []
  for(let i = 0; i < keypads.length; i++) {
    let counter = 0;
    for(let j = 0; j < wordlist.length; j++) {
      if(!wordlist[j].includes(keypads[i].charAt(0))) {
        continue;
      } 
      if(wordMatch(wordlist[j], keypads[i]) === true) { 
        counter++;
      }
    }
    count[i] = counter;
  }
  return count;
}