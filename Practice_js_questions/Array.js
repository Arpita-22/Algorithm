//Test 1: Determine the location of an item in an array

indexOf = function(arr, item) {
    return arr.indexOf(item) 
   }

//Test 2: Add the values of an array

sum = function(arr) {
    return arr.reduce((a, b) => a + b, 0)
  }

//Test 3: Return a new array after Removing all instances of a value from an array
// Returns a new array
remove = function(arr, item) {
    return arr.filter(element => element !== item)
  
}

//Test 4: Remove all instances of a value from an array (modify original array)
// Modifies the original array
removeWithoutCopy = function(arr, item) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            arr.splice(i, 1);
            i--;
        }
    }
    return arr
  }

//Test 5: Add an item to the end of an array
// Appends to the original array
append = function(arr, item) {
    return arr.push(item); 
}


//Test 6: Remove the last item of an array
// Modifies the original array
truncate = function(arr) {
    return arr.pop()
  }

//Test 7: Add an item to the beginning of an array
// Prepends to the original array
prepend = function(arr, item) {
    return arr.unshift(item);
  }

//Test 8: Remove the first item of an array
// Modifies the original array
curtail = function(arr) {
    return arr.shift()
  }

//Test 9: Join together two arrays
concat = function(arr1, arr2) {
    return arr1.concat(arr2);
  
}

//Test 10: Add an item anywhere in an array
// Inserts an element in the original array
insert = function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
 }

//Test 11: Count the occurences of an item in an array
count = function(arr, item) {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            count++;
        }
    }
    return count;
}

//Test 12: Find duplicates in an array
duplicates = function(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        //indexOf returns the first index of the element
        if(arr.indexOf(arr[i]) !== i){
          newArr.push(arr[i]);
        }
    }
    return[...new Set(newArr)];;
  }

//Using object
// return all elements that occur more than once
duplicates = function(arr) {
    let duplicateElements = {} ;
    for (let i = 0; i < arr.length; i++){
        if(arr.indexOf(arr[i]) !== i){
          duplicateElements[arr[i]] = arr[i]
        }
    }
   return Object.values(duplicateElements);
}


//Test 13: Square each number in an array
// return a new array with each item squared
square = function(arr) {
    return arr.map(item => item ** 2)
}

//Test 14: Find all occurrences of an item in an array
findAllOccurrences = function(arr, target) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === target){
        newArr.push(i)
      }
    }
    return newArr; 
  }
