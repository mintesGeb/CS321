"use strict";
let array2 = [5, 8, 1, 2, 3, 5];
let array3 = [48, 1, 6, 23, 37, 23, 19, 21];

function bucketList(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  //   console.log(max);
  let bucket1 = [];
  let bucket2 = [];
  for (let i = 0; i <= max; i++) {
    bucket1[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    bucket1[arr[i]]++;
  }
  for (let i = 0; i < bucket1.length; i++) {
    if (bucket1[i] === 1) bucket2.push(i);
    else {
      for (let j = 0; j < bucket1[i]; j++) {
        bucket2.push(i);
      }
    }
  }

  return bucket2;
}

// console.log(bucketList(array2));

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
console.log(findPerfectSquare(array3));

function radixSort(arr) {
  let radix = Math.sqrt(findPerfectSquare(arr));
  let remArr = [];
  let quoArr = [];
  let sorted = [];

  for (let i = 0; i < arr.length; i++) {
    remArr[i] = [];
    quoArr[i] = [];
  }

  for (let i = 0; i < arr.length; i++) {
    let rem = arr[i] % radix;
    remArr[rem].push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < remArr[i]; j++) {
      let quo = Math.floor(remArr[i][j] / radix);
      quoArr[quo].push(remArr[i][j]);
    }
  }

  for (let i = 0; i < quoArr.length; i++) {
    for (let each of quoArr[i]) {
      sorted.push(each);
    }
  }

  return remArr;
}
console.log(radixSort(array3));
