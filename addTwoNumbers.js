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

//solution accepted by leetcode
// the function below is a constructor and can be used inside the program
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    if(l1 === null && l2 === null) {
        return null;
    }

    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
// adding the two values from two different linkedlist and putting that to in a new list
//carry is the value that carries over to the next list value if it is more that one digit
    let list = null
    let carry = 0
    while(l1 !== null && l2 !== null) {
        let sum = (l1.val + l2.val + carry) % 10;
        carry = parseInt((l1.val + l2.val + carry) / 10);
        list = {val: sum, next: list}
        l1 = l1.next
        l2 = l2.next
    }
   //if the two linked lists have different lengths 
    while(l1 !== null) {
        let sum = (l1.val + carry) % 10;
        carry = parseInt((l1.val + carry) / 10);
        list = {val: sum, next: list}
        l1 = l1.next
    }

    while(l2 !== null) {
        let sum = (l2.val + carry) % 10;
        carry = parseInt((l2.val + carry) / 10);
        list = {val: sum, next: list}
        l2 = l2.next
    }

    if(carry > 0) {
        list = {val: carry, next: list}
    }
    
    if(list.next === null) {
        return list;
    }
    
  //reverse a linkedlist
    let prev = null
    while (list !== null) {
        let next = list.next
        list.next = prev
        prev = list
        list = next
    }
    
    return prev;
};

