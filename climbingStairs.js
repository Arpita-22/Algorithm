function climbingStairs(n){
    if(n <= 3){
        return n;
    }
    let arr = [1,2,3];
    for(let i = 3; i < n; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n - 1]
}

//Using recursion

function climbingStairs(n){
    if(n <= 3){
        return n;
    }
    return(climbingStairs(n - 1) + climbingStairs(n - 2));
}