//have to refactor
function fibo(n, memo=[]){
    function fibo(n){
        let memo = {}
        if(n <= 2){
          memo[n - 1] = 1
          // console.log(memo[ n - 1])
          return 1;
        }
        let key = n - 1;
        if (`${key}`in memo){
        //   console.log(memo[`${key}`])
          return memo[`${key}`]
        }else{
          let fibN = fibo(n-1) + fibo(n-2)
          memo[n - 1] = fibN  
          return fibN
        }
    }
    
}

function fibo(n, memo=[]){
    if(memo[n-1] !== undefined) return memo[ n - 1];
    if(n <= 2) return 1;
    let fibN = fibo(n-1, memo) + fibo(n-2, memo)
    memo[n-1] = fibN;
    return fibN;
    }


