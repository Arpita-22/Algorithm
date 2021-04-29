//stack implementation with singly linked list
class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  class Stack{
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
  //But this the unshift method from the original singly linked list
    push(val){
      let newNode = new Node(val);
      if(this.first === null){
        this.first = newNode;
        this.last = newNode;
      }else{
        let temp = this.first;
        this.first = newNode;
        this.first.next = temp;
      }
      this.length++;
      return this.length;
    }

//shift() function in original linkedlist
  pop(){
    if(this.length === 0){
      return null;
    }
    if(this.first === this.last){
      this.last = null;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.length--;
    return temp.val;
  }
  }
  
//Driver code
//   let stack = new Stack();
//   stack.push(5);
//   stack.push(4);
//   console.log(stack.pop())