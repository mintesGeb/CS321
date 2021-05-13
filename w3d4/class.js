"use strict";
const MinHeap = require("./MinHeap.js");

let mh = new MinHeap.MinHeap();
mh.insertElem(1);
mh.insertElem(2);
mh.insertElem(4);
mh.insertElem(4);
mh.insertElem(5);
mh.insertElem(6);
mh.insertElem(9);
console.log(mh);
