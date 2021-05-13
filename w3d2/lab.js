"use strict";
let Dll = require("./DLinkedList");
let HT = require("./HashMap");
let DLinkedList = new Dll.DLinkedList();

function hashcode(k) {
  return k;
}

function hashvalue(hashcode) {
  return (2 * hashcode + 5) % 11;
}

function put(list, key) {
  let index = hashvalue(hashcode(key));
  if (!list[index]) {
    list[index] = new Dll.DLinkedList();
  }
  list[index].insertLast(key);
  return [index, list[index]];
}

function findDuplicates(list) {
  let count = {};
  for (let each of list) {
    if (each) {
      for (let element of each) {
        if (count[element]) count[element]++;
        else {
          count[element] = 1;
        }
      }
    }
  }
  return count;
}
function removeDuplicates(list) {
  let frequency = findDuplicates(list);
  let elements = [];
  list = [];

  for (let each of Object.keys(frequency)) {
    put(list, Number(each));
  }
  return list;
}

function contains(list, key) {
  for (let each of list) {
    if (each) {
      let iter = each.elements();
      while (iter.hasNext()) {
        if (iter.nextObject() == key) return true;
      }
    }
  }
  return false;
}

function removeDup(list) {
  let newHash = new Array(list.length);
  for (let each of list) {
    if (!contains(newHash, each)) {
      put(newHash, each);
    }
  }
  return newHash;
}
function fillHashTable(list, elements) {
  for (let each of elements) {
    put(list, each);
  }

  return list;
}

let hashTable = new Array(11);
let givenKeys = [10, 44, 13, 88, 23, 94, 11, 39, 20, 39, 16, 5];

for (let each of givenKeys) {
  DLinkedList.insertLast(each);
}

fillHashTable(hashTable, givenKeys);
// hashTable[0];
// console.log(hashTable);
function display(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == undefined) console.log(undefined);
    else list[i].print();
  }
}

function checkForSum(list, z) {
  let newList = removeDup(list);
  for (let each of list) {
    if (contains(newList, z - each)) {
      return [each, z - each];
    }
  }
}

console.log(checkForSum(givenKeys, 24)); //13, 11

// hashTable[3].print();
// console.log(removeDuplicates(hashTable));
// display(hashTable);
// console.log("--------");
// display(removeDup(givenKeys));
// DLinkedList.print();
// console.log(list);
