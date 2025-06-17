// Instructions
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.
// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

// Test
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
//     assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
//     assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
//     });
//   })

// Solution
function DNAtoRNA(dna) {
  let str = dna.split('')

    let res = []


for(let i = 0; i < str.length; i++){
     if(str[i] == 'T'){
        res.push('U')
     }else{
         res.push(str[i])
     }
}
  
  return res.join('')
  
}