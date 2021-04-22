"use strict";
// const assert = require("assert");
const test = require("./ArraySorter");
const sorter = new test.ArraySorter();
let arr1 = [8, 4, 6, 2, 3, 5, 1];
let arr2 = [8, 4, 6, 2, 3, 5, 1];
let arr3 = [8, 4, 6, 2, 3, 5, 1];
let arr4 = [8, 4, 6, 2, 3, 5, 1];

console.log("--------Shell");
sorter._shellSort(arr4, 1, 5);
sorter.print(arr4);
console.log("comparison " + sorter.keyComparisons());
console.log("shifting " + sorter.numShifts());
console.log("swaps " + sorter.numSwaps());
// console.log(sorter._findLargestH(arr1, 2, 8));

console.log("--------Bubble");
sorter.bubbleSort(arr1);
sorter.print(arr1);
console.log("comparison " + sorter.keyComparisons());
console.log("shifting " + sorter.numShifts());
console.log("swaps " + sorter.numSwaps());

console.log("--------Selection");
sorter.selectionSort(arr2);
sorter.print(arr2);
console.log("comparison " + sorter.keyComparisons());
console.log("shifting " + sorter.numShifts());
console.log("swaps " + sorter.numSwaps());

console.log("--------Insersion");
sorter.insertionSort(arr3);
sorter.print(arr3);
console.log("comparison " + sorter.keyComparisons());
console.log("shifting " + sorter.numShifts());
console.log("swaps " + sorter.numSwaps());
