function rotLeft(a, d) {
    // Write your code here
    for(let i = 0; i < d; i++){
      let numToRotate = a.shift();
      a.push(numToRotate);
    }
    return a;
}