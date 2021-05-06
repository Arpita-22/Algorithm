//Test 1: Use an array as arguments when calling a function
// Return what fn returns using arr as arguments
argsAsArray = function(fn, arr) {
    console.log(arr)
    return fn.apply(this, arr);
}

//Test 2: Change the context in which a function is called
// Return what fn returns with obj as its context
speak = function(fn, obj) {
    return fn.call(obj);
}

//Test 3: Return a function from a function
