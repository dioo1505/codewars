// Instruction
// Remove First and Last Character
// Task
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// Examples
// removeChar('eloquent') // -> 'loquen'
// removeChar('country')  // -> 'ountr' 
// removeChar('person')   // -> 'erso'
// removeChar('ab')       // -> '' (empty string)
// removeChar('xyz')      // -> 'y'
// Function Signature
// function removeChar(str) {
//   // Your code here
// }
// Requirements
// The input string will always have at least 2 characters
// For strings with exactly 2 characters, return an empty string
// For strings with 3 or more characters, remove the first and last character
// The function should handle strings containing letters, numbers, and special characters
// Test Cases
// Your solution will be tested against:
// Basic functionality with common words
// Edge cases with 2-character and 3-character strings
// Strings containing numbers and special characters
// Random test cases of varying lengths

// Test
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("should remove the first and last character", () => {
//     assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss');
//   });
  
//   it("should handle minimum length strings", () => {
//     assert.strictEqual(removeChar('ab'), '');
//     assert.strictEqual(removeChar('xyz'), 'y');
//   });
// });


// Solution
function removeChar(str){
  return str.slice(1,-1)
 };
 

