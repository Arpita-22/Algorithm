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

      // insert(val){
  //   let newNode = new Node(val);
  //   if(this.root === null){
  //     this.root = newNode;
  //     return this;
  //   }
  //   else{
  //       if(val < this.root.val){
  //         if(this.root.left === null){
  //           this.root.left = newNode;
  //       }
  //       else{
  //         let current = this.root.left
  //         while(current){
  //         current = current.left
  //         }
  //     }
  //   }
  //     if(val > this.root.val){
  //       if(this.root.right === null){
  //         this.root.right = newNode;
  //       }
  //       else{
  //         let current = this.root.right
  //         while(current){
  //           current = current.right
  //         }
  //       }
  //     }   
  //   }
  // }

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

  }


//Driver code
  
//   let tree = new BinarySearchTree();
//   tree.root = new Node(5);
//   tree.root.left = new Node(3);
//   tree.root.right = new Node(7);
//   tree.root.left.right = new Node(4);
//   tree.root.right.left = new Node(6);
//   console.log(tree);

// tree.insert(10);
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(2);
// tree.insert(20);
// tree.insert(3);
// tree.insert(14);
// tree.insert(7);
// tree.insert(16);
// tree.insert(9);
// tree.insert(1);
// tree.insert(5);
// console.log(tree.root);