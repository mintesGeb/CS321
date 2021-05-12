"use strict";
// class TNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//     this.parent = null;
//   }
// }
const BT = require("./BinaryTree");
const Node = require("./BinaryTree");
let bs = new BT.BinaryTree();

function sum(T, r) {
  if (T.isExternal(r)) return 0;
  return sum(T, T.leftChild(r)) + r.element() + sum(T, T.rightChild(r));
}
let root = bs.insertRoot(5);
let rootLeft = bs.insertLeft(root, 3);
let rootRight = bs.insertRight(root, 7);
bs.insertLeft(rootLeft, 2);
bs.insertRight(rootLeft, 4);
bs.insertLeft(rootRight, 6);
bs.insertRight(rootRight, 8);
// console.log(bs);
console.log(sum(bs, root));
