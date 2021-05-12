"use strict";
const HashList = require("./HashMap.js");
const ht = new HashList.HashMap();
// function hashcode(key){
//     return hashcode;
// }
// function hashvalue(hashcode){
//     return hashvalue;
// }
// function hashTable(size){
//     let newArray=new Array(size);

// }
// function hash(key, arrayLen) {
//   let total = 0;
//   let weird_Prime = 31;

//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96;
//     total = (total * weird_Prime + value) % arrayLen;
//   }
//   return total;
// }
// class HashTable {
//   constructor(size = 13) {
//     this.keyMap = new Array(size);
//   }
//   _hash(key) {
//     let total = 0;
//     let prime = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0);
//       total = (total * prime + value) % this.keyMap.length;
//     }
//     return total;
//   }
//   set(key, value) {
//     let index = this._hash(key);
//     let pos = this.keyMap[index];
//     if (!pos) {
//       pos = [];
//     }
//     pos.push([key, value]);
//     return index;
//   }
//   get(key) {
//     let index = this._hash(key);
//     let pos = this.keyMap[index];
//     if (pos) {
//       for (let each of pos) {
//         if (each[0] === key) return each[1];
//       }
//       return false;
//     }
//     return false;
//   }
// }
// let ht = new HashTable();
// console.log(ht.set("hi", "aloha"));
// console.log(ht.set("hello", "dehna"));
// console.log(ht.set("selam", "melkam"));
// console.log(ht);
// ht.put("hi", "wifie");
// ht.put("hj", "wifie");
// console.log("===");
ht.put("12", 1);
ht.put("44", 2);
ht.put("13", 3);
ht.put("88", 4);
ht.put("23", 5);
ht.put("94", 6);
ht.put("94", 7);
ht.put("11", 8);
ht.put("39", 9);
ht.put("20", 10);
ht.put("16", 11);
ht.put("5", 12);
// console.log(ht.get(94));
// ht.removeDup().print();
console.log(ht.checkForSum(ht, 20));
// console.log(ht.-find(7));
// ht.put("fh", "wifie");
// ht.put("fht", "wifie");
// ht.put("mom", "mom");

// ht.put("dad", "dad");
// ht.print();
// console.log(ht.contains(1));
// // console.log(ht);
// console.log(ht.keys());
