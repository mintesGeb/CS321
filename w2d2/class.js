"use strict";

function inPlaceQuickSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return;
  let k = randomInt(l, r);

  swap(arr, r, k);
  let p = arr[r];
  let i = inPlacePartition(arr, l, r, p);
  inPlaceQuickSort(arr, l, i - 1);
  inPlaceQuickSort(arr, i + 1, r);
  return arr;
}

function inPlacePartition(arr, l, r, p) {
  let i = l;
  let j = r - 1;
  while (true) {
    while (arr[i] < p && i <= j) {
      i++;
    }
    while (arr[j] > p && i <= j) {
      j--;
    }
    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    } else break;
  }
  swap(arr, i, r);
  console.log(i);
  return i;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function randomInt(l, r) {
  return Math.floor(Math.random() * (r - l + 1));
}
let array = [2, 1, 6, 4, 9, 7, 8, 5];
inPlaceQuickSort(array, 0, 7);

console.log(array);

function findK_thSmallest(arr, k) {
  let p = randomInt(0, arr.length - 1);
  let { l, e, g } = partition(arr, 0, arr.length, p);
  let ll = l.length;
  let el = e.length;
  let gl = g.length;

  if (k > ll && k <= ll + el) return e;
  else if (k <= ll) return findK_thSmallest(l, k);
  else return findK_thSmallest(g, k - (ll + el));
}

function partition(arr, lo, hi, p) {
  let l = [];
  let e = [];
  let g = [];
  for (let i = lo; i < hi; i++) {
    if (arr[i] > arr[p]) {
      g.push(arr[i]);
    } else if (arr[i] < arr[p]) {
      l.push(arr[i]);
    } else e.push(arr[i]);
  }
  return { l, e, g };
}

let array1 = [2, 1, 6, 4, 7, 3, 9, 8, 5];
// console.log(findK_thSmallest(array1, 5));
