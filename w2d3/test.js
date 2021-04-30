let Dll = require("./DLinkedList");
let ll = new Dll.DLinkedList();

// console.log(ll.isEmpty());

// ll.insertLast(4);

// ll.insertLast(1);
// console.log(ll);

// function sum(list) {
//   let iter = list.positions();
//   let sum = 0;
//   while (iter.hasNext()) {
//     let node = iter.nextObject();
//     sum += node.element();
//   }
//   return sum;
// }
// console.log(sum(ll));
// console.log(ll.isEmpty());

ll.insertFirst(3);
ll.insertLast(5);
ll.insertLast(7);
ll.insertLast(9);
ll.insertLast(11);
ll.print();
console.log(ll.size());
// console.log();

function sum(list) {
  let iter = list.positions();
  let sum = 0;
  while (iter.hasNext()) {
    let node = iter.nextObject();
    sum += node.element();
  }
  return sum;
}
// console.log(sum(ll));

function findKth(l, k) {
  if (k < 0 || k > l.size()) return undefined;
  let count = 1;
  let current = l.first();
  while (count < k) {
    current = l.after(current);
    count++;
  }
  return current.element();
}
console.log(findKth(ll, 3));

function removeMiddleElement(l) {
  let index;
  if (l.size() % 2 === 0) {
    index = l.size() / 2 - 1;
  } else {
    index = Math.floor(l.size() / 2);
  }

  let current = l.first();
  let countIndex = 0;
  while (countIndex < index) {
    current = l.after(current);
    countIndex++;
  }
  let removed = l.remove(current);
  return removed;
}

console.log(removeMiddleElement(ll));
