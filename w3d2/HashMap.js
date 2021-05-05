const List = require("./DLinkedList.js");
const Pair = require("./Item.js");

class HashMap {
  constructor() {
    this._table = [];
    this._size = 0; //no. elements in the table
    this._numChains = 11; //size of the table
    for (let i = 0; i < this._numChains; i++) {
      this._table[i] = new List.DLinkedList();
    }
  }

  contains(key) {
    if (this.get(key) != null) return true;
    else return false;
  }
  put(key, value) {
    this._size++;
    const bucketIndex = this._getIndex(key);
    const list = this._table[bucketIndex];

    const item = new Pair.Item(key, value);

    //update the value for an existing key
    let iter = list.positions();
    while (iter.hasNext()) {
      let pos = iter.nextObject();
      let ele = pos.element(); //each element is an Item(key, value)
      if (ele.key() == key) {
        list.replaceElement(pos, item);
        return;
      }
    }
    //insert(key, value) when no such key in the table
    list.insertFirst(item);
  }

  get(key) {
    //bucketIndex is hashvalue for key
    const bucketIndex = this._getIndex(key);
    const list = this._table[bucketIndex];
    let iter = list.elements();
    while (iter.hasNext()) {
      let ele = iter.nextObject(); //each element is an Item(key, value)
      if (ele.key() == key) return ele.value();
    }
    return null;
  }

  remove(key) {
    const bucketIndex = this._getIndex(key);
    const list = this._table[bucketIndex];
    let iter = list.positions();
    while (iter.hasNext()) {
      let pos = iter.nextObject();
      let ele = pos.element(); //each element is an Item(key, value)
      if (ele.key() == key) {
        this._size--;
        list.remove(pos);
        return ele.value();
      }
    }
    return null;
  }

  _keysOrValues(option) {
    //when i=0 return keys otherwise return values
    let returnList = new List.DLinkedList();
    for (let i = 0; i < this._table.length; i++) {
      let list = this._table[i];
      let iter = list.elements();
      while (iter.hasNext()) {
        let item = iter.nextObject();
        if (option == 0) returnList.insertLast(item.key());
        else returnList.insertLast(item.value());
      }
    }
    return returnList;
  }
  keys() {
    return this._keysOrValues(0);
  }
  values() {
    return this._keysOrValues(1);
  }
  toString() {
    let str = "{";
    for (let i = 0; i < this._table.length; i++) {
      if (!this._table[i].isEmpty()) str += this._table[i].toString();
    }
    str += "}";
    return str;
  }
  print() {
    console.log(this.toString());
  }
  size() {
    return this._size;
  }
  isEmpty() {
    return this._size == 0;
  }
  _hash(key) {
    let hashcode = 0;
    const stringTypeKey = key.toString();

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);

      hashcode += charCode * Math.pow(2, index);
    }
    console.log(hashcode);
    return hashcode;
  }
  _getIndex(key) {
    const hashcode = this._hash(key);
    // const index = hashcode % this._table.length;
    const index = (2 * hashcode + 5) % this._table.length;
    console.log(index);
    return index;
  }
}

exports.HashMap = HashMap;
