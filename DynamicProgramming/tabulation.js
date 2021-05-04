function fibo(n){
    let fibSeries = [1,1];
    if(n <= 2) return 1;
    for(let i = 2; i < n; i++){
        fibSeries[i] = fibSeries[i - 1] + fibSeries[ i - 2];
    }
    return fibSeries[n - 1];
}