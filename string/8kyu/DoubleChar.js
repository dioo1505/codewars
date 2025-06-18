// Instructions
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// Test
// const Test = require('@codewars/test-compat');

// describe("doubleChar", function() {
//   it("works for some examples", function() {
//     Test.assertEquals(doubleChar("abcd"), "aabbccdd");
//     Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
//     Test.assertEquals(doubleChar("1337"), "11333377");
//     Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
//     Test.assertEquals(doubleChar("123456"), "112233445566");
//     Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
//   });
// });


// Solution
function doubleChar(str) {
  return str.split('').map((item) => item+item).join('')
}

function doubleChar(str) {
  let arr = []
  for(let i = 0; i < str.length; i++){
  arr.push(str[i].repeat(2))
}

  return(arr.join(''))

}