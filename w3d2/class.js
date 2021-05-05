"use strict";
const HashList = require("./HashMap.js");
const ht = new HashList.HashMap();
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
console.log("===");
ht.put("11", "bro");
ht.put("39", "bro");
ht.put("20", "bro");
ht.put("16", "bro");
ht.put("5", "bro");
console.log("===");
// ht.put("fh", "wifie");
// ht.put("fht", "wifie");
// ht.put("mom", "mom");

// ht.put("dad", "dad");
// ht.print();
// console.log(ht.contains(1));
// // console.log(ht);
// console.log(ht.keys());
