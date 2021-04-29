let Dll = require("./DLinkedList");
let ll = new Dll.DLinkedList();
console.log(ll.isEmpty());

ll.insertLast(4);

ll.insertLast(1);
console.log(ll);

function sum(list) {
  let iter = list.positions();
  let sum = 0;
  while (iter.hasNext()) {
    let node = iter.nextObject();
    sum += node.element();
  }
  return sum;
}
console.log(sum(ll));
