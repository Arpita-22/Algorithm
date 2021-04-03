class Node{
    constructor(val){
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  } 

  class DoublyLinkedList{
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.head === null){
          this.head = newNode;
          this.tail = this.head;
        }else{
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
          this.length++;
          return this;
      }

      pop(){
        if(this.head === null){
          return null;
        }
          let currentTail = this.tail;
          if(this.length === 1){
            this.head = null;
            this.tail = null;
          }
          else{
            this.tail = currentTail.prev;
            this.tail.next = null;
            currentTail.prev = null;
          }
          this.length--;
          return currentTail;
      }

      shift(){
        if(this.head === null){
          return null;
        }
        let oldHead = this.head;
  
        if(this.length === 1){
          this.head = null;
          this.tail = null;
        }
        else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
      }
      
  }