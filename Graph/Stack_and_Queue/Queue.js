//implementation with singly linkedlist
class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  }
  
  class Queue{
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  //adding to the last push() function of a linkedlist
    enqueue(val){
      let newNode = new Node(val);
      if(this.first === null){
        this.first = newNode;
        this.last = newNode;
      }else{
        this.last.next = newNode;
        this.last = newNode;
      }
      return ++this.length;
    }
  //removing at the begining same as stack shift() function of linkedlist
    dequeue(){
      if(this.first === null){
        return null;
      }
      let temp = this.first;
      if(this.first === this.last){
        this.last = null;
      }
      this.first =  this.first.next;
      this.length--;
      return temp.val;
    }
    
  }
  
  //driver code
//   let q = new Queue();
//   q.enqueue(1);
//   q.enqueue(2);
//   q.enqueue(3);
//   q.enqueue(4);
//   console.log(q.dequeue())
//   console.log(q.dequeue())
//   console.log(q.dequeue())
//   console.log(q.dequeue())
//   console.log(q.dequeue())