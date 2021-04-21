"use strict";
let array1 = [8, 4, 6, 1, 3, 5, 2];

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (arr[j - 1] > arr[j]) swapElements(arr, j - 1, j);
    }
  }
  return arr;
}
// let time1 = performance.now();
// bubbleSort(array1);
// let time2 = performance.now();
// console.log(`time elapsed is: ${(time2 - time1) / 1000}`);

function swapElements(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// function sortBubble(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     // let isSwap = false;
//     for (let j = 0; j <= arr.length - 2 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         // isSwap = true;
//         swap(arr, j, j + 1);
//       }
//       //   if (isSwap === false) return arr;
//     }
//   }
//   return arr;
// }
// console.log(sortBubble(array1));
// 8, 4, 6, 1, 3, 5, 2
// function findMinPos(arr, start = 0) {
//   let pos = start;
//   let min = arr[pos];
//   for (let i = pos + 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//       pos = i;
//     }
//   }
//   return pos;
// }
// console.log(findMinPos(array1));

// function selectionSort(arr) {
//   let minPos;
//   for (let i = 0; i < arr.length - 1; i++) {
//     minPos = findMinPos(arr, i);
//     swapElements(arr, i, minPos);
//   }
//   return arr;
// }
// console.log(selectionSort(array1));
// function findMinPos(arr, start) {
//   let pos = start;
//   let min = arr[pos];

//   for (let i = pos + 1; i < arr.length; i++) {
//     if (min > arr[i]) {
//       pos = i;
//       min = arr[pos];
//     }
//   }
//   return pos;
// }
// console.log(findMinPos(array1, 0));

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = findMinPos(arr, i);
//     swap(arr, i, minIndex);
//   }
//   return arr;
// }
// console.log(selectionSort(array1));

// 8, 4, 6, 2, 3, 5, 1;

// function insersionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i];
//     let j = i;
//     while (j > 0 && temp < arr[j - 1]) {
//       arr[j] = arr[j - 1];
//       j--;
//     }
//     arr[j] = temp;
//   }
//   return arr;
// }
// console.log(insersionSort(array1));
// function insersionSort(arr) {
//   let temp;
//   let j;
//   for (let i = 1; i < arr.length; i++) {
//     temp = arr[i];
//     j = i;
//     while (j > 0 && temp < arr[j - 1]) {
//       arr[j] = arr[j - 1];
//       j = j - 1;
//     }
//      arr[j] = temp;
//   }
//   return arr;
// }

// console.log(insersionSort(array1));

// function sortBubble2(arr) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     let isSwap = false;
//     for (let j = 0; j <= i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         isSwap = true;
//         swap(arr, j, j + 1);
//       }
//       if (isSwap === false) return arr;
//     }
//   }
//   return arr;
// }
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// swap(array1,0,1)
