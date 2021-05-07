"use strict";
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    let pos;
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      let prev = current;
      while (current) {
        while (current.value >= newNode.value) {
          prev = current;
          current = current.left;
          pos = "left";
          if (!current) break;
        }
        while (current.value <= newNode.value) {
          prev = current;
          current = current.right;
          pos = "right";
          if (!current) break;
        }
      }
      if (pos == "left") {
        prev.left = newNode;
      } else prev.right = newNode;
    }
    return this;
  }
}
let tree = new BinarySearchTree();
tree.insert(8);
tree.insert(7);
console.log(tree);
