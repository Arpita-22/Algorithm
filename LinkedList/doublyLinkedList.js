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

    unshift(val){
       let newNode = new Node(val)
       if(this.length === 0){
        this.head = newNode
        this.tail = this.head
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    //unoptimized version
    // get(index){
    //     if(index === 0 || index >= this.length){
    //         return null
    //     }
    //     let count = 0
    //     let current = this.head
    //     while(count != index){
    //         current = current.next
    //         count++
    //     }
    //     return current

    // }

    // get(index){
    //     if(index === 0 || index >= this.length){
    //         return null
    //     }

    //     if(index <= this.length/2){
    //        let count = 0 
    //        current = this.head
    //        while(current){
    //            current = current.next
    //            if(index === count){
    //                return current
    //            }
    //            count++     
    //        }
    //     }

    //     if(index > this.length/2 ){
    //         let count = this.length
    //         current = this.tail
    //         while(current){
    //             current = current.prev
    //             if(index === count){
    //                 return current
    //             }
    //             count-- 
    //         }
                    
    //     }
    // }

    get(index){
            if(index < 0 || index >= this.length){
                return null
            }
            let count, current;
            if(index <= this.length/2){
                let count = 0
                let current = this.head
                while(count !== index){
                    current = current.next
                    count++
            }

            }else{
                let count = this.length - 1
                let current = this.tail
                while(count !== index){
                    current = current.prev
                    count-- 
                }

            }
        return current
    }

    set(index, val){
        let setNode = this.get(index)
        if(setNode !== null){
            setNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length){
            return false
        }  
        if(index === 0){
            return !!this.unshift(val)
        }
        if(index === this.length){
            return !!this.push(val)
        }
        
        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next
  
        prevNode.next = newNode
        newNode.prev = prevNode
        newNode.next = nextNode 
        nextNode.prev = newNode   
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length){
          return false
        }
    
        if(index === 0){
          return this.shift()
        }
    
        if(index === this.length - 1){
          return this.pop()
        }
        let prevNode = this.get(index - 1)
        let removeNode = this.get(index)
        //let prevNode = removeNode.prev
        let nextNode = removeNode.next
    
        nextNode.prev = prevNode
        prevNode.next = nextNode
        removeNode.prev = null
        removeNode.next = null
        //removeNode.prev.next = removeNode.next
        //removeNode.next.prev = removeNode.prev
    
        this.length--
        return removeNode
      }

}