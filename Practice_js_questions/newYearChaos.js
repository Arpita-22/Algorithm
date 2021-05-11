/*
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    // Write your code here
    let swapCount = 0
    for(let i = q.length - 1; i >= 0; i--){
      if(q[i] !== i + 1){
        if(((i - 1) >=0) && q[i - 1] === i + 1){
          swapCount++;
          swap(q, i - 1, i)
        }else if(((i - 2) >=0) && q[i - 2] === i + 1){
          swapCount += 2;
          swap(q, i - 2, i-1);
          swap(q, i - 1, i);
        }else{
          console.log("Too chaotic");
          return;
        }
      }
    }
    console.log(swapCount);
}


function swap(arr, a, b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}