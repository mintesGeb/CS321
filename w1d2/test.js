"use strict";
const assert = require("assert");
const test = require("./ArraySorter");

describe("porcupine number", function () {
  it("the first porcupine number is 139", function () {
    function findPorcupineNumber(num) {}
    assert.strictEqual(test.ArraySorter([8, 4, 6, 2, 3, 5, 1]), [
      1,
      2,
      3,
      4,
      5,
      6,
      8,
    ]);
  });
});
