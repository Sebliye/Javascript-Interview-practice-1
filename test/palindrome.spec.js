let palindrome=require('../string/palindrome.js');
let assert=require('assert')

describe('test palindrome',()=>{
     it('check palindrome',()=>{
          let result=palindrome('mom');
          assert.strictEqual(result,'palindrome')
     })
     it('test num and string combination',()=>{
          let result=palindrome('123seb');
          assert.strictEqual(result,'not palindrome')
     })
     it('test if we pass a number',()=>{
          let result=palindrome('123');
          assert.strictEqual(result,'not palindrome')
     })
     it('test with no argument',()=>{
          let result=palindrome();
          assert.strictEqual(result,0)
     })

})
console.log(palindrome('mom'))
