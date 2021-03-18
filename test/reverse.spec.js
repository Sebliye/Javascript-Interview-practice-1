let reversestr=require('../string/reverse');
let assert=require('assert');
let expect=require('chai');


describe('test reverse',()=>{
     it('string',()=>{
          let result=reversestr('seb')
          assert.strictEqual(result,'bes')
     })
})
