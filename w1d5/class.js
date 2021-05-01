"use strict";

function pickPivot(l, r) {
  return Math.floor(Math.random() * (r - l + 1));
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function inPlaceQuickSort(seq, l, r) {
  if (l >= r) return;
  let k = pickPivot(l, r);
  swap(seq, r, k);
  let p = seq[r];
  let i = inPlacePartition(seq, l, r, p);
  inPlaceQuickSort(seq, l, i - 1);
  inPlaceQuickSort(seq, i + 1, r);
}

function inPlacePartition(seq, l, r, p) {
  let i = l;
  let j = r - 1;

  while (true) {
    while (seq[i] < p && i <= j) {
      i++;
    }
    while (seq[j] > p && i <= j) {
      j--;
    }
    if (i <= j) {
      swap(seq, i, j);
      i++;
      j--;
    } else break;
  }
  swap(seq, i, r);
  return i;
}
let arr = [5, 3, 1, 2, 6, 5, 4, 87, 9]; // expected [1,2,3,4,5,5,6,9,87]
inPlaceQuickSort(arr, 0, arr.length - 1);
console.log(arr);
