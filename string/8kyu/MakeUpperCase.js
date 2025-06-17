// Instructions
// Write a function which converts the input string to uppercase.

// Test
// const { assert } = require('chai');

// describe("Basic Tests", function(){
//   it("should pass the basic tests", function(){
//     assert.strictEqual(makeUpperCase(""),           "");
//     assert.strictEqual(makeUpperCase("hello"), "HELLO");
//     assert.strictEqual(makeUpperCase("Hello"), "HELLO");
//     assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
//   });
// });

// Solution
function makeUpperCase(str) {
  return str.toUpperCase()
}