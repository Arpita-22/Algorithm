// passes 1565 of 1568 test cases hence not an acceptable solution in Leetcode
var addTwoNumbers = function(l1, l2) {
    // console.log(l1.val+l2.val, l1.next.val + l2.next.val,l1.next.next.val + l2.next.next.val)
    //created two arrays from linkedlist
    let arr1 = []
    let arr2 = []
    while(l1 != null){
        arr1.push(l1.val)
        l1 = l1.next
    }
    while(l2 != null){
        arr2.push(l2.val)
        l2 = l2.next
    }
    
    let arr1Reverse = arr1.toString().split(',').reverse()
    let arr2Reverse = arr2.toString().split(',').reverse()
    let sum1 = arr1Reverse[0]
    let sum2 = arr2Reverse[0]

    for(let i = 1; i < arr1Reverse.length; i++){
    sum1 += arr1Reverse[i]
    }

    for(let i = 1; i < arr2Reverse.length; i++){
    sum2 += arr2Reverse[i]
    }
//added the sum of two arrays inside an array
    let sum = parseInt(sum1) + parseInt(sum2)
    let arr = sum.toString().split('')
    let output = []

    for(let i = 0; i < arr.length; i++){
      output.push(parseInt(arr[i]))
    }
//created a linkedList from an array
    
    let list = null
    for(let i = 0 ; i < output.length; i++){
        list = {val: val = output[i], next:next = list}
    }  
    
   return list
    
};