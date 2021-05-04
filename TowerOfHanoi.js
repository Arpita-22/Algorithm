
function towerOfHanoi(n, fromRod, toRod, auxRod) {
    //Base case is 1 disk, after which, we are done.
    if (n == 1) {
      console.log("Moving disk 1 from " + fromRod + " to " + toRod);
    } else {
      towerOfHanoi(n - 1, fromRod, auxRod, toRod);
      console.log("Moving disk " + n + " from " + fromRod + " to " + toRod);
      towerOfHanoi(n - 1, auxRod, toRod, fromRod);
    }
  }
  
  towerOfHanoi(4, "X", "Y", "Z");