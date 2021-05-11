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
// [3, 5, 4, 2, 10]
function stockPrice(arr){
    let maxProfit = float('-inf');
    let minStockPrice = arr[0]
    let buyIndex = -1;
    let sellIndex = -1;

    if(arr.length < 2){
        return 0;
    }

    for(let i = 0 ; i < arr.length ; i++){
        if(minStockPrice > arr[i]) {
            minStockPrice = arr[i];
            buyIndex = i;
        }
    }

    for(let i = buyIndex; i < arr.length; i++){
        let diff = arr[i] - minStockPrice  ;
        if(maxProfit < diff){
            maxProfit = diff;
            sellIndex = i;
    }
    return[buyIndex, sellIndex]
}


function stockPrice(arr){
    let maxProfit = float('-inf');
    let minStockPrice = arr[0];
    
    if(arr.length < 2){
        return 0;
    }

    for(let i = 0 ; i < arr.length ; i++){

        maxProfit = Math.max(maxProfit, arr[i] - minStockPrice);
        minStockPrice = Math.min(minStockPrice, arr[i]);

        }

    return maxProfit;

}

//solved 

function stockPrice(stocks){
    let minStockPrice = stocks[i];
    let maxProfit = 0;

    for(let i = 0; i < stocks.length; i++){
        if(arr[i] < minStockPrice){
            minStockPrice = arr[i];
        }
        else{
            maxProfit = Math.max(maxProfit, (arr[i] - minStockPrice))
        }
    }

    return maxProfit;
}
