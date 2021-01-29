//bruteforce
function fibo(n){
  let firstNum = 0
  let secondNum = 1
  let sum = 1
  for(let i = 2; i < n; i++ ){
    sum  = firstNum + secondNum
    firstNum = secondNum
    secondNum = sum 
  }
  return sum
}
