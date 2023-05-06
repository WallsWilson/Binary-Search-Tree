class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
    } else {
      this._insert(this.root, val);
    } 
    return this;  
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (this.root === null) {
      this.root = new Node(val); 
      } else {
        this._insertRecursively(this.root, val);
        }
        return this;
        }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    } else {
      return this._find(this.root, val);
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if(this.root === null) {
      return undefined;
    } else {
      this.insertRecursively(this.root, val);
      }
      return this;
    }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node) {
    console.log(node.val);
    if(node.left) this.dfsPreOrder(node.left);
    if(node.right) this.dfsPreOrder(node.right);
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node) {
    if(node.left) this.dfsInOrder(node.left);
    console.log(node.val);
    if(node.right) this.dfsInOrder(node.right);
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node) {
    if (node.left) this.dfsPostOrder(node.left);
    if(node.right) this.dfsPostOrder(node.right);
    console.log(node.val);
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let q = new Queue();
    q.enqueue(this.root);
    let arr = [];
    while(!q.isEmpty()) {
      let n = q.dequeue();
      arr.push(n.val);
      if(n.left) q.enqueue(n.left);
      if(n.right) q.enqueue(n.right);
      }
      return arr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
