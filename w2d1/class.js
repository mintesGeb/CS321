"use strict";
function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}
let arr1 = [1, 3, 4, 6, 8];
let arr2 = [2, 5, 7];
// console.log(merge(arr1, arr2));

// function quickSort(arr) {
//   if (arr.length === 1 || arr.length === 0) return arr;
//   let r = pickPivot(arr);
//   let { l, e, g } = partition(arr, r);
//   l = quickSort(l);
//   g = quickSort(g);
//   return merge(merge(l, e), g);
// }

// function pickPivot(arr) {
//   let r = Math.floor(Math.random() * arr.length);

//   return r;
// }
// console.log(pickPivot([2, 4, 6, 5, 78, 9, 4, 5]));

// function partition(arr, r) {
//   let l = [];
//   let g = [];
//   let e = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[r]) g.push(arr[i]);
//     else if (arr[i] < arr[r]) l.push(arr[i]);
//     else e.push(arr[i]);
//   }

//   return { l, e, g };
// }
// console.log(quickSort([2, 4, 6, 5, 78, 9, 4, 5]));

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function pivotPicker(arr, lo, hi) {
  return Math.floor(Math.random() * (hi - lo + 1));
}

function inPlaceQuickSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return arr;
  let k = pivotPicker(arr, l, r);
  //   console.log(k);

  swap(arr, r, k);
  let p = arr[r];
  let i = inPlacePartition(arr, l, r, p);
  let left = inPlaceQuickSort(arr, l, i - 1);
  let right = inPlaceQuickSort(arr, i + 1, r);
  return left;
}

function inPlacePartition(arr, lo, hi, pi) {
  console.log(lo, hi, arr);

  let i = lo;
  let j = hi - 1;
  let iStuck;
  while (i <= j) {
    if (arr[i] < pi) {
      i++;
    } else {
      iStuck = i;
      if (arr[j] > pi) {
        j--;
      } else {
        swap(arr, iStuck, j);
        i++;
        j--;
      }
    }
  }
  swap(arr, i, hi);
  console.log(arr);
  console.log("----------");
  return i;
}
// function quickSortHelper(arr,p,l=0,r=arr.length-1){
//     swap(arr,p,r);
//     while (l<=r ){
//         if (arr[i]>)
//     }
// }
console.log(inPlaceQuickSort([2, 4, 6, 5, 78, 9, 4, 5]));
// 2, 4, 5,  4, 5, 78, 6, 9
//           j  i
