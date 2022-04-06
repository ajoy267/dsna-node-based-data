//Problem 1 linked list add Problem 2 linked list getlist
class LinkedListNode {
  constructor(letter) {
    this.letter = letter;
    this.next = null;
  }

  //this is our add method that will be linking the new node to our list
  add(node) {
    //if next is null then we will add the node in it's place to link them
    if (!this.next) {
      this.next = node;
    }
    //if next is not null then we will pass the node down our list by
    //recalling our next and repeating until next is null
    else {
      this.next.add(node);
    }
  }

  getList() {
    // return a string
    if (this.next) {
      const orderedString = this.letter + this.next;
      return orderedString;
    }
    // order values
    // use recursion to delegate
  }
}

const root = new LinkedListNode("A");
const nodeB = new LinkedListNode("B");
root.add(nodeB);
// console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode("C");
const nodeD = new LinkedListNode("D");
const nodeE = new LinkedListNode("E");
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'
// root.remove(1);
console.log(root.getList()); // 'A C D E'

//Problem 3 Binary Node
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //if node is greater than the original value we pass it to the right
    if (node > this.value) {
      //if this.right is null then well add the node to it
      if (this.right === null) {
        this.right = node;
      }
      // if this.right is not null then well rerun the add
      else {
        this.right.add(node);
      }
    }
    //if node is smaller than the original value we pass it to the left
    if (node < this.value) {
      //if this.left is null then well add the node to it
      if (this.left === null) {
        this.left = node;
      }
      // if this.left is not null then well rerun the add
      else {
        this.left.add(node);
      }
    }
  }
}

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");

// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
