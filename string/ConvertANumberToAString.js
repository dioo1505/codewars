// Instruction

// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


// Test
// const assert = require('chai').assert;
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(numberToString(67), '67');
//   });
// });

// Solution
function numberToString(num) {
  return num.toString()
}
