// Instructions
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// Test
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(countSheep(0), "");
//     assert.strictEqual(countSheep(1), "1 sheep...");
//     assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
//     assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
//   });
// });

// Solution
var countSheep = function (num){
  let result = ""
  for(let i = 1; i <= num ; i++){
    result += `${i} sheep...`
  }
  return result
}