//given an array prices 
//prices i is the cost of a stock
//prices 0 => cost of the stock on that particular
//Highest profit buying on a single day and selling on day 
//if there is no way to acheive a profit I return

//[22, 20, 21 ] => any length => return 1
//I can see the prices beforehand
//loop through the array 1st element 
//2nd loop through the array 2nd element
//if the remainingPrice = arr[j] - arr[i]
//if the 

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