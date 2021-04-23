let arr1 = [2, 4, 6, 7];
let arr2 = [1, 3, 5];

function mergeSort(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] < arr1[i]) {
      newArr.push(arr2[j]);
      j++;
    } else {
      newArr.push(arr1[i]);
      i++;
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
// console.log(mergeSort(arr1, arr2));

function mSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mSort(arr.slice(0, mid));
  let right = mSort(arr.slice(mid));
  return mergeSort(left, right);
}
// console.log(mSort([1, 3, 8, 5, 2, 6, 4, 7]));

function sum(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sum(arr.slice(1));
}

function sum(arr) {
  return sumHelper(arr, 0);
}
function sumHelper(arr, index) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumHelper(arr, index + 1);
}
console.log(sum([1, 2, 3, 4]));

// Algorithm sum(arr)
//  input: array to add elements from
//  output: sum of the elements of the array

//  return sumHelper(arr, 0)

// Algorithm sumHelper(arr, index)
//   input: array and index the initial index to start sum
//   output: sum of each element of the array

//   if index = arr.length then return 0
//   return arr[index] +sumHelper(arr , index+1)

function max(arr) {
  return maxhelper(arr, 0);
}
function maxhelper(arr, index) {
  if (index === arr.length) {
    return 0;
  }

  let toCheck = maxhelper(arr, index + 1);
  if (arr[index] > toCheck) return arr[index];
  else return toCheck;
  // return arr[index] > toCheck ? arr[index] : toCheck;
}
console.log(max([1, 2, 3, 8, 4, 9]));

// Algorithm findMax(arr)
//   input: array to check max value FormData
//   output: max value

//   return maxhelper(arr,0);

// Algorithm findMaxhelper(arr, index)
//   input: array and index to see which has maximum value
//   output: the maximum value in the array
//  toCheck <- findMaxhelper(arr, index+1)
//   if index =  arr.length then return 0;
//   if arr[index]  > toCheck then return arr[index]
//   else return toCheck

// function binarySearh(arr, n, lo, hi = arr.length - 1) {
//   let mid = Math.floor(hi - lo + 1 / 2);

//   if (arr[mid] === n) {
//     return mid;
//   } else if (arr[mid] > n) {
//     hi = mid - 1;
//     return binarySearh(arr, n, lo, hi);
//   } else {
//     lo = mid + 1;
//     return binarySearh(arr, n, lo, hi);
//   }
// }

function binarySearch(arr, n, lo, hi = arr.length) {
  let mid = Math.floor(hi - lo + 1 / 2);
  if (n === arr[mid]) return mid;
  else if (n > arr[mid]) {
    return binarySearch(arr, n, mid + 1);
  } else {
    return binarySearch(arr, n, lo, mid - 1);
  }
}
console.log(binarySearch([1, 3, 4, 5, 6, 8, 9], 9, 0));

function sum2(arr) {
  let i = arr.length - 1;
  let sum = 0;
  while (arr[i] > 0) {
    sum += arr[i];
    i--;
  }
  return sum;
}

console.log(sum2([0, 0, 0, 1, 1, 1]));