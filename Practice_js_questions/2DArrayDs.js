//bruteforce approach
function hourglassSum(arr) {
    // Write your code here
    let maxHourglassSum = -63;
    for(let i = 0; i < arr.length - 2; i++){
      for(let j = 0; j < arr[i].length - 2; j++){

        let topSum = arr[i][j]+ arr[i][j+1]+ arr[i][j+2];
        let midSum = arr[i+1][j+1];
        let bottomSum = arr[i+2][j]+ arr[i+2][j+1]+ arr[i+2][j+2];
        let currentSum = topSum + midSum + bottomSum;
        

        maxHourglassSum = Math.max(currentSum, maxHourglassSum);
      }
    }
    return maxHourglassSum;
}