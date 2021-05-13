"use strict";
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
class HashTable {
  constructor(size) {
    this.table = new Array(size);
  }
  _hashcode(key) {
    let hashcode;
    // if (typeof key == Number) {
    //   hashcode = key.toString();
    // } else {
    hashcode = "";
    for (let i = 0; i < key.length; i++) {
      hashcode += key.charCodeAt(i);
      //   }
    }
    return hashcode;
  }
  _hashvalue(hashcode) {
    return hashcode % this.table.length;
  }
  set(key, value) {
    let index = this._hashvalue(this._hashcode(key));
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }
  get(key) {
    let index = this._hashvalue(this._hashcode(key));
    if (!this.table[index]) {
      return undefined;
    }
    for (let each of this.table[index]) {
      if (each[0] == key) {
        return each[1];
      }
    }
    return undefined;
  }
  keys() {
    let keys = [];
    for (let each of this.table) {
      if (each) {
        for (let element of each) {
          keys.push(element[0]);
        }
      }
    }
    return keys;
  }
  values() {
    let values = [];
    for (let each of this.table) {
      if (each) {
        for (let element of each) {
          values.push(element[1]);
        }
      }
    }
    return values;
  }
}

let hash = new HashTable(11);
hash.set("mintes", 100);
hash.set("jos", 90);
hash.set("robbie", 10);
hash.set("amen", 95);
hash.set("aman", 95);
console.log(hash.values());
console.log(hash.keys());
