"use strict";
// function largestH(n) {
//   let h = 1;

//   while (n >= h) {
//     let x = h;
//     h = 3 * h + 1;
//   }

//   return x;
// }
let n = 100;
let h = 1;
let x;
while (n > h) {
  x = h;
  h = h * 3 + 1;
}
console.log(x);
// console.log(largestH(20));

function shellSort(arr) {
  let size = arr.length - 1;
  let h = 1;

  while (size > h) {
    h = h * 3 + 1;
  }
  h = (h - 1) / 3;

  while (h > 0) {
    for (let i = h; i <= size; i++) {
      let j = i;
      let temp = arr[i];
      while (j > h - 1 && temp < arr[j - h]) {
        arr[j] = arr[j - h];
        j -= h;
      }
      arr[j] = temp;
    }
    h = (h - 1) / 3;
  }
  return arr;
}
let array1 = [8, 4, 6, 1, 3, 5, 2];
console.log(shellSort(array1));
