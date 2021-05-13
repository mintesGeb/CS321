"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchtree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (current) {
        if (current.value === val) return undefined;
        if (current.value > val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if (current.value == val) return current;
      if (current.value > val) {
        if (!current.left) return false;
        else {
          current = current.left;
        }
      } else {
        if (!current.right) return false;
        else {
          current = current.right;
        }
      }
    }
    return false;
  }
  contains(val) {
    if (!this.root) return undefined;

    let current = this.root;
    while (current) {
      if (current.value == val) return true;
      if (current.value > val) {
        if (!current.left) return false;
        else {
          current = current.left;
        }
      } else {
        if (!current.right) return false;
        else {
          current = current.right;
        }
      }
    }
    return false;
  }
  inOrder() {
    let data = [];
    function inOrderHelper(node) {
      if (node.left) inOrderHelper(node.left);
      if (node.right) inOrderHelper(node.right);
      data.push(node.value);
    }
    inOrderHelper(this.root);
    return data;
  }

  //   inOrder() {
  //     let data = [];
  //     function inOrderHelper(node) {
  //       if (node.left) inOrderHelper(node.left);
  //       data.push(node.value);
  //       if (node.right) inOrderHelper(node.right);
  //     }
  //     inOrderHelper(this.root);
  //     return data;
  //   }
}

let newBST = new BinarySearchtree();

newBST.insert(5);
newBST.insert(5);
newBST.insert(7);
newBST.insert(2);
newBST.insert(6);
newBST.insert(8);
newBST.insert(1);
newBST.insert(4);
console.log(newBST.find(7));
console.log(newBST.inOrder());
// console.log(newBST);
