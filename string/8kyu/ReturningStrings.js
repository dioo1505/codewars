// Instructions
// Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]


// Test
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
//     assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
//   })
// })

// Solution
function greet(name){
  return `Hello, ${name} how are you doing today?`
}