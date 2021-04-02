class Node{
    constructor(val){
      this.val = val;
      this.next = null;
    }
  } 

  class SinglyLinkedList{
    constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    push(val){
      var newNode = new Node(val);
      if(!this.head){
        this.head = newNode;
        this.tail = this.head;
      }
      else{
          this.tail.next = newNode;
          this.tail = newNode;
      }
       this.length ++;
       return this;
    }

    pop(){
      if(!this.head) return null;
      let current = this.head;
      let newTail = current;
      while(current.next !== null){
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      return current;
    }

    //removing nodes from the beginnning of the linkedlist
    shift(){
      if(this.head === null) return null;

      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if(this.length === 0){
        this.tail = null;
      }
      return currentHead;
    }

    //adding nodes to the beginning of the linkedlist
    unshift(val){
      let newNode = new Node(val);
       if(!this.head){
        this.head = newNode;
        this.tail = this.head;
      }
      else{
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }

    //getting the value at the particular index in the linkedlist
    get(index){
      if(index < 0 || index >= this.length){
        return null;
      }
      let count = 0;
      let current = this.head;

    //   while(current !== null){
    //     if(count === index){
    //       return current;
    //     }
    //     current = current.next;
    //     count += 1;
    //   }
    
      while(count !== index){
        current = current.next;
        count++;
      }
      return current;
    }

    //setting the value at a particular index in the linkedlist
    set(index, val){
      let foundNode = this.get(index)
      if(foundNode !== null){
        foundNode.val = val
        return true
      }
      return false
    }

    insert(index, val){
      if(index < 0 || index > this.length){
       return false;
      }
       if(index === this.length){
         return !!this.push(val)
         //  this.push(val);
         //  return true;
       }
       if(index === 0){
         return !!this.unshift(val)
         // this.unshift(val);
         // return true;
       }
       let newNode = new Node(val);
       let prev =this.get(index - 1);
       let temp = prev.next;
       prev.next = newNode;
       newNode.next = temp;
       this.length++;
       return true;
     }

     remove(index){
      if(index < 0 || index >= this.length){
        return null;
      }
      if(index === this.length - 1){
        return this.pop();
      }
      if(index === 0){
        return this.shift();
      }
      let prevNode = this.get(index - 1);
      let removedNode = prevNode.next;
      prevNode.next = removedNode.next;
      this.length--;
      return removedNode;
    }
  }