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

    DFSPreOrder(){
        let visited = [];
        function traverse(node){
          visited.push(node.val);
          if(node.left) traverse(node.left);
          if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited; //[ 10, 6, 3, 8, 15, 20 ]
      }

    DFSPostOrder(){
    let visited = [];
    function traverse(node){
        if(node.left) traverse(node.left);
    //  instead of if you can use node.left && traverse(node.left)
        if(node.right) traverse(node.right);
    //  instead of if you can use node.right && traverse(node.right)
        visited.push(node.val);
    }
    traverse(this.root);
    return visited; //[ 3, 8, 6, 20, 15, 10 ]
    }

    DFSInOrder(){
    let visited = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        visited.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited; //[ 3, 6, 8, 10, 15, 20 ]
    }
  

}