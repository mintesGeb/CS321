class ArraySorter {
  constructor() {
    this._compCount = 0;
    this._swapCount = 0;
    this._shiftCount = 0;
  }
  keyComparisons() {
    return this._compCount;
  }
  numSwaps() {
    return this._swapCount;
  }
  numShifts() {
    return this._shiftCount;
  }
  print(arr) {
    let last = arr.length - 1;
    let res = "[";
    for (let i = 0; i <= last; i++) {
      res = res + arr[i];
      if (i < last) {
        res = res + ", ";
      }
    }
    console.log(res + "]");
  }
  _swapElements(arr, j, k) {
    let temp = arr[j];
    arr[j] = arr[k];
    arr[k] = temp;
    this._swapCount++;
  }

  insertionSort(arr) {
    this._compCount = 0;
    this._shiftCount = 0;
    this._swapCount = 0;
    return this._insertionSort(arr, 0, arr.length - 1);
  }

  _insertionSort(arr, lo, hi) {
    let size = hi - lo + 1;
    for (let i = 1; i < size; i++) {
      let k = lo + i;
      let temp = arr[k];
      this._compCount++;
      while (0 < k && temp < arr[k - 1]) {
        arr[k] = arr[k - 1]; // shift right
        k--;
        this._compCount++;
        this._shiftCount++;
      }
      arr[k] = temp; // place in sorted position
    }
    return arr;
  }
  bubbleSort(arr) {
    this._compCount = 0;
    this._shiftCount = 0;
    this._swapCount = 0;
    return this._bubbleSort(arr);
  }
  _bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      this._compCount++;
      for (let j = 0; j <= arr.length - 2 - i; j++) {
        this._compCount++;
        if (arr[j] > arr[j + 1]) {
          this._swapElements(arr, j, j + 1);
          this._compCount++;
        }
      }
    }
    return arr;
  }
  selectionSort(arr) {
    this._compCount = 0;
    this._shiftCount = 0;
    this._swapCount = 0;
    return this._selectionSort(arr);
  }
  _findMinPos(arr, start) {
    let pos = start;
    let min = arr[pos];

    for (let i = pos + 1; i < arr.length; i++) {
      this._compCount++;
      if (min > arr[i]) {
        pos = i;
        min = arr[pos];
        this._compCount++;
      }
    }
    return pos;
  }
  _selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = this._findMinPos(arr, i);
      this._swapElements(arr, i, minIndex);
      this._compCount++;
    }
    return arr;
  }
}

let x = new ArraySorter();

x.print(x.selectionSort([8, 4, 6, 2, 3, 5, 1]));

exports.ArraySorter = ArraySorter;
