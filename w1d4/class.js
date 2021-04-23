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

function sumFast(arr, index) {
  if (index === arr.length - 1) {
    return arr[index];
  }
  return arr[index] + sumFast(arr, index + 1);
}
console.log(sumFast([1, 2, 3, 4], 0));

function binarySearh(arr, n, lo, hi = arr.length - 1) {
  let mid = Math.floor(hi - lo + 1 / 2);

  if (arr[mid] === n) {
    return mid;
  } else if (arr[mid] > n) {
    hi = mid - 1;
    return binarySearh(arr, n, lo, hi);
  } else {
    lo = mid + 1;
    return binarySearh(arr, n, lo, hi);
  }
}
// console.log(binarySearh([1, 3, 4, 5, 6, 8, 9], 8, 0));
