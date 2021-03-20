let removeDuplicateString=require('../string/removeduplicatestring');
let assert=require('assert');
let {expect}=require('chai');

describe('removeduplicatestring',()=>{
     it ('string',()=>{
          expect(removeDuplicateString('abeba')).to.deep.equal('abe')
     })
     it('test with sentence',()=>{
          expect(removeDuplicateString('hello this is seble')).to.deep.equal('helo tisb')
     })
})
