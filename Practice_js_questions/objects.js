//Test 1: Alter the context of an Object
// Call fn with obj as the context
alterContext = function(fn, obj) {
    constructor(fn, obj)
        return fn.call(obj);
}

//Test 2: Alter multiple objects at once
// Add the greeting field to all objects
// created by the constructor
alterObjects = function(constructor, greeting) {
    constructor(greeting)
      constructor.prototype.greeting = greeting;
      return greeting;
  }

//Test 3: Iterate over an object's "own" properties
// the following format
// [ 'foo: bar', 'baz: bim' ]
// Return a string of object's own properties in 
// the following format
// [ 'foo: bar', 'baz: bim' ]
iterate = function(obj) {
    let arr = [];
    let newArr = [];
  for(const prop in obj){
    //   console.log(`${prop}: ${obj[prop]}`);
      arr.push(`${prop}: ${obj[prop]}`);
  }
   for(let i = 0; i < arr.length - 1; i++){
       newArr.push(arr[i]);
   }
   return newArr;
}

iterate = function(obj) {
    let arr = [];
  for(const prop in obj){
      arr.push(`${prop}: ${obj[prop]}`);
  }
   return arr.slice(0, arr.length - 1);
}

//Test 1: Create a function that returns a module
