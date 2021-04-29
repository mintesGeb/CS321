"use strict";

let array = [2, 1, 6, 4, 9, 7, 8, 5];
inPlaceQuickSort(array, 0, 7);

console.log(array);

function inPlaceQuickSort(arr, l, r) {
  if (l >= r) return;
  // if (arr.length === 1) return arr;
  // let pivot = randomInt(l, r);
  let pivot = 0;
  let p = arr[pivot];
  console.log(p);
  swap(arr, r, pivot);
  let i = inPlacePartition(arr, l, r, p);
  inPlaceQuickSort(arr, l, i - 1);
  inPlaceQuickSort(arr, i + 1, r);
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
      j++;
    } else {
      break;
    }
  }
  swap(arr, i, r);

  return i;
}

function pivotPicker1(l, r) {
  return Math.floor(Math.random() * r - l + 1) + 1;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// ------------
// function inPlaceQuickSort(arr, l = 0, r = arr.length - 1) {
//   if (l >= r) return;
//   let k = randomInt(l, r);

//   swap(arr, r, k);
//   let p = arr[r];
//   let i = inPlacePartition(arr, l, r, p);
//   inPlaceQuickSort(arr, l, i - 1);
//   inPlaceQuickSort(arr, i + 1, r);
//   return arr;
// }

// function inPlacePartition(arr, l, r, p) {
//   let i = l;
//   let j = r - 1;
//   while (true) {
//     while (arr[i] < p && i <= j) {
//       i++;
//     }
//     while (arr[j] > p && i <= j) {
//       j--;
//     }
//     if (i <= j) {
//       swap(arr, i, j);
//       i++;
//       j--;
//     } else break;
//   }
//   swap(arr, i, r);
//   //   console.log(i);
//   return i;
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

function randomInt(l, r) {
  return Math.floor(Math.random() * (r - l + 1)) + 1;
}
// let array = [2, 1, 6, 4, 9, 7, 8, 5];
// inPlaceQuickSort(array, 0, 7);

// console.log(array);

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

let array2 = [5, 8, 1, 2, 3, 5];

function bucketList(arr) {
  // step1 O(m+n)
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // console.log(max);
  let bucket1 = [];
  let bucket2 = [];
  for (let i = 0; i <= max; i++) {
    bucket1[i] = 0;
  }

  //   step2 O(n)
  for (let i = 0; i < arr.length; i++) {
    bucket1[arr[i]]++;
  }

  // // step3 O(m+n)
  for (let i = 0; i < bucket1.length; i++) {
    if (bucket1[i] === 1) {
      bucket2.push(i);
    } else if (bucket1[i] > 1) {
      for (let j = 0; j < bucket1[i]; j++) {
        bucket2.push(i);
      }
    }
  }
  return bucket2;
}
console.log(bucketList(array2));

let array3 = [48, 1, 6, 23, 37, 23, 19, 21];

function findPerfectSquare(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  let ps = 0;
  let i = 0;
  while (ps <= max) {
    ps = i * i;
    i++;
  }

  return ps;
}

function radixSort(arr) {
  let radix = Math.sqrt(findPerfectSquare(array3));
  let remArr = [];
  let quoArr = [];
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    remArr[i] = [];
    quoArr[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    let rem = arr[i] % radix;v
    remArr[rem].push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < remArr[i].length; j++) {
      let quo = Math.floor(remArr[i][j] / radix);
      quoArr[quo].push(remArr[i][j]);
    }
  }

  for (let i = 0; i < quoArr.length; i++) {
    for (let each of quoArr[i]) {
      sorted.push(each);
    }
  }

  return sorted;
}
// console.log(radixSort(array3));

// 48, 1, 6, 23, 37, 23, 19, 21

function pickPivot(arr, lo, hi) {
  return Math.floor(Math.random() * (hi - lo));
}

function findSecondMin(arr, k = 2, lo = 0, r = arr.length - 1) {
  let pivot = pickPivot(arr, lo, r + 1);
  let p = arr[pivot];
  //   swap(arr, r, p);
  let { l, e, g } = partition(arr, lo, r, p);
  let ll = l.length;
  let el = e.length;
  let gl = g.length;
  console.log(l, e, g);
  if (ll === 1) return e;
  else if (ll > 1) return l;
  else return g;
}
function partition(arr, lo, hi, p) {
  let l = [];
  let g = [];
  let e = [];
  for (let i = 0; i < hi - lo + 1; i++) {
    if (arr[i] > p) g.push(arr[i]);
    else if (arr[i] < p) l.push(arr[i]);
    else e.push(arr[i]);
  }
  //   console.log({ l, g, e });
  return { l, g, e };
}

// console.log(findSecondMin(array3));
