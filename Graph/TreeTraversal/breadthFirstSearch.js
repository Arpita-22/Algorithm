
class Node{
    constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
class BinarySearchTree{
constructor(){
    this.root = null;
}


insert(val){
let newNode = new Node(val);
if(this.root === null){
    this.root = newNode;
    return this;
}
else{
    let current = this.root;
    //traversing through the loop
    while(true){
    //if node has duplicate values
    if(val === current.val){
        return undefined;
    }
    if(val < current.val){
        if(current.left === null){
        current.left = newNode;
        return this;
        }
        else{
        current = current.left;
        }
    }

    else if(val > current.val){
        if(current.right === null){
        current.right = newNode;
        return this;
        }
        else{
        current = current.right;
        }
    }
    }
}    
}

//optimized version 
insert(val){
let newNode = new Node(val);
if(this.root === null){
    this.root = newNode;
    return this;
}
    let current = this.root;
    while(true){
    if(val === current.val){
        return undefined;
    }
    if(val < current.val){
        if(current.left === null){
        current.left = newNode;
        return this;
        }
        current = current.left;
    }
    if(val > current.val){
        if(current.right === null){
        current.right = newNode;
        return this;
        }
        current = current.right;
    }
    }
}


find(val){
    if(this.root === null){
    return false;
    }
    let current = this.root;
    let found = false;
    while(current && !found){
        if(val < current.val){
        current = current.left;
        }
        else if(val > current.val){
        current = current.right;
        }
        else{
        found = true;
        }
    }
    if(!found) return false;
    return current;
    }

    contains(val){
    if(this.root === null){
    return false;
    }
    let current = this.root;
    let found = false;
    while(current && !found){
        if(val < current.val){
        current = current.left;
        }
        else if(val > current.val){
        current = current.right;
        }
        else{
        return true;
        }
    }
    return false;
    }

    BFS(){
        let node = this.root;
        let queue = [];
        let visited = [];

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            visited.push(node);
            visited.push(node.val);
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        return visited //[ 10, 6, 15, 3, 8, 20 ]
    }

}