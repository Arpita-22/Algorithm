//There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//n = 7
//ar = [1,2,1,2,1,3,2] 
//There is one pair of color 1 and one of color 2 . There are three odd socks left, one of each color. The number of pairs is 2.
function sockMerchant(n, ar) {
    let obj = {};
    let pairs = 0;
    for(let i = 0; i < ar.length; i++){
      if(obj.hasOwnProperty(ar[i])){
        obj[ar[i]]++;
      }else{
        obj[ar[i]] = 1;
      }
      if(obj[ar[i]] % 2 === 0){
        pairs++;
      }
    }
    return pairs;
  }