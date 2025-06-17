// Instructions
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"


// Test
// const chai = require('chai');
// const assert = chai.assert;
// const testIt = (input, expected) => {
//   it(`Testing for input: ${JSON.stringify(input)}`, function () {
//     assert.strictEqual(noSpace(input), expected, `runBF(${JSON.stringify(input)}) should return ${JSON.stringify(expected)}`);
//   });
// };
// describe("Fixed Tests", () => {
//   testIt('8 j 8   mBliB8g  imjB8B8  jl  B', '8j8mBliB8gimjB8B8jlB');
//   testIt('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd', '88Bifk8hB8BB8BBBB888chl8BhBfd');
//   testIt('8aaaaa dddd r     ', '8aaaaaddddr');
// });

// Solution
function noSpace(x){
  return x.replaceAll(" ", "")
 }